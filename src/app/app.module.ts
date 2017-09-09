import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule, Provider } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as components from './components';
import * as services from './services';
import * as constants from './constants';
import * as routes from './routes';

@NgModule({
  declarations: [
    components.AppComponent,

    // pages
    components.UserListComponent,
    components.UserViewComponent,
    components.UserEditComponent,
    components.NotFoundComponent,
    components.HomePageComponent,

    // shared
    components.UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes.userRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    services.ApiService,
    { provide: constants.ApiUrlToken, useValue: constants.API_URL } as Provider
  ],
  bootstrap: [ components.AppComponent ]
})
export class AppModule { }
