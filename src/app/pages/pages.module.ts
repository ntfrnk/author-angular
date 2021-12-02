import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProjectHomeComponent } from './projects/home/home.component';
import { ProjectNewComponent } from './projects/new/new.component';
import { ProjectEditComponent } from './projects/edit/edit.component';

import { ArticleHomeComponent } from './articles/home/home.component';
import { ArticleNewComponent } from './articles/new/new.component';
import { ArticleEditComponent } from './articles/edit/edit.component';
import { ArticleReadComponent } from './articles/read/read.component';

import { UserHomeComponent } from './users/home/home.component';
import { UserNewComponent } from './users/new/new.component';
import { UserEditComponent } from './users/edit/edit.component';

import { SettingComponent } from './setting/setting.component';
import { ErrorComponent } from './error/error.component';

import { UserService } from '../services/user.service';
import { UserGuard } from '../services/user.guard';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProjectHomeComponent,
    ProjectNewComponent,
    ProjectEditComponent,
    ArticleHomeComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    ArticleReadComponent,
    UserHomeComponent,
    UserNewComponent,
    UserEditComponent,
    SettingComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    UserGuard,
    UserService,
  ]
})
export class PagesModule { }
