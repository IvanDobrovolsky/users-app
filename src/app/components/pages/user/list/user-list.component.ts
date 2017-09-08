import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../services';

@Component({
  selector: 'users-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [
    'user-list.component.css'
  ]
})
export class UserListComponent implements OnInit {
  constructor(private apiService: ApiService) {

  }

  public ngOnInit(): void {
    console.log(this.apiService);
  }
}
