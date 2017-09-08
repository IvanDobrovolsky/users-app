import { InjectionToken } from '@angular/core';

export const API_URL = 'http://jsonplaceholder.typicode.com';

export const ApiUrlToken = new InjectionToken<string>('API_URL');
