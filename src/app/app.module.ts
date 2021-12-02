import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { routing as Routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { Api } from './services/api.service';
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { AdminGuard } from './services/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [
    appRoutingProviders,
    UserGuard,
    AdminGuard,
    UserService,
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
