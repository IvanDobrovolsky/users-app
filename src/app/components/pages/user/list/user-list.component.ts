import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'users-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [
    'user-list.component.css'
  ]
})
export class UserListComponent implements OnInit {
  public users$: Observable<Array<IUser>>;

  constructor(private apiService: ApiService) {

  }

  public ngOnInit(): void {
    this.users$ = this.apiService.getUsers();
  }
}
