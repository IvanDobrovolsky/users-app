import { Routes, Route } from '@angular/router';

import * as components from '../components';

export const userRoutes = [
  { path: '',              component: components.HomePageComponent } as Route,
  { path: 'user/list',     component: components.UserListComponent } as Route,
  { path: 'user/view/:id', component: components.UserViewComponent} as Route,
  { path: 'user/edit/:id',     component: components.UserEditComponent} as Route,
  { path: '**',            component: components.NotFoundComponent } as Route
] as Routes;
