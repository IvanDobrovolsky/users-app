import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as components from './components';
import * as constants from './constants';
import * as routes from './routes';
import * as services from './services';

@NgModule({
  declarations: [
    components.AppComponent,

    // pages
    components.HomePageComponent,
    components.NotFoundComponent,
    components.UserEditComponent,
    components.UserListComponent,
    components.UserViewComponent,

    // shared
    components.UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes.userRoutes)
  ],
  providers: [
    services.ApiService,
    { provide: constants.ApiUrlToken, useValue: constants.API_URL } as Provider
  ],
  bootstrap: [ components.AppComponent ]
})
export class AppModule { }
