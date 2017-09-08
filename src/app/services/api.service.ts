import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as constants from '../constants';

@Injectable()
export class ApiService {
  constructor(@Inject(constants.ApiUrlToken) private apiUrl: string,
              private http: HttpClient) {
  }

  public getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(`${this.apiUrl}/users`);
  }

  public getUser(userId: string): Observable<IUser> {
    return this.http.get<IUser>(this.apiUrl);
  }

  public updateUser(userId: string, updatedUser: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, updatedUser);
  }
}
