import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ErrorComponent } from './pages/error/error.component';

import { ProjectHomeComponent } from './pages/projects/home/home.component';
import { ProjectNewComponent } from './pages/projects/new/new.component';
import { ProjectEditComponent } from './pages/projects/edit/edit.component';

import { ArticleHomeComponent } from './pages/articles/home/home.component';
import { ArticleReadComponent } from './pages/articles/read/read.component';
import { ArticleNewComponent } from './pages/articles/new/new.component';
import { ArticleEditComponent } from './pages/articles/edit/edit.component';

import { UserHomeComponent } from './pages/users/home/home.component';
import { UserNewComponent } from './pages/users/new/new.component';
import { UserEditComponent } from './pages/users/edit/edit.component';

import { UserGuard } from './services/user.guard';
import { AdminGuard } from './services/admin.guard';

const appRoutes: Routes = [
  {path: '', component: ProjectHomeComponent, canActivate: [UserGuard]},
  {path: 'projects', component: ProjectHomeComponent, canActivate: [UserGuard]},
  {path: 'project/new', component: ProjectNewComponent, canActivate: [UserGuard]},
  {path: 'project/edit/:id', component: ProjectEditComponent, canActivate: [UserGuard]},
  {path: 'articles/:project_id', component: ArticleHomeComponent, canActivate: [UserGuard]},
  {path: 'article/read/:id', component: ArticleReadComponent, canActivate: [UserGuard]},
  {path: 'article/new/:project_id', component: ArticleNewComponent, canActivate: [UserGuard]},
  {path: 'article/edit/:id', component: ArticleEditComponent, canActivate: [UserGuard]},
  {path: 'users', component: UserHomeComponent, canActivate: [UserGuard, AdminGuard]},
  {path: 'user/new', component: UserNewComponent, canActivate: [UserGuard, AdminGuard]},
  {path: 'user/edit/:id', component: UserEditComponent, canActivate: [UserGuard, AdminGuard]},
  {path: 'settings', component: SettingComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'login/:logout', component: LoginComponent, canActivate: [UserGuard]},
  {path: '**', component: ErrorComponent, canActivate: [UserGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
