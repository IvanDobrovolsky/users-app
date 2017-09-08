import { Routes, Route } from '@angular/router';

import * as components from '../components';

export const userRoutes = [
  { path: '',     component: components.HomePageComponent } as Route,
  { path: 'list', component: components.UserListComponent } as Route,
  { path: 'view', component: components.UserViewComponent} as Route,
  { path: 'edit', component: components.UserEditComponent} as Route,
  { path: '**',   component: components.NotFoundComponent } as Route
] as Routes;
