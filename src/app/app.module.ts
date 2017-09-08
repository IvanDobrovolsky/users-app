import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as components from './components';
import * as services from './services';
import * as constants from './constants';
import * as routes from './routes';

@NgModule({
  declarations: [
    components.AppComponent,

    components.UserListComponent,
    components.UserViewComponent,
    components.UserEditComponent,
    components.NotFoundComponent,
    components.HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes.userRoutes)
  ],
  providers: [
    services.ApiService
  ],
  bootstrap: [ components.AppComponent ]
})
export class AppModule { }
