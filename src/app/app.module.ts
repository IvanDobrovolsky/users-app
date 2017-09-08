import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';

import * as components from './components';
import * as services from './services';
import * as constants from './constants';
import * as routes from './routes';

@NgModule({
  declarations: [
    AppComponent,

    components.UserListComponent,
    components.UserViewComponent,
    components.UserEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    services.ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
