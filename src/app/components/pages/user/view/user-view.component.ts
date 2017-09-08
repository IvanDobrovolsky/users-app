import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../../../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'users-view',
  templateUrl: 'user-view.component.html',
  styleUrls: [
    'user-view.component.css'
  ]
})
export class UserViewComponent implements OnInit {
  public user$: Observable<IUser>;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this.user$ = this.activatedRoute
      .params
      .switchMap((params: Params, index: number) => {
        return this.apiService.getUser(params.id);
      });
  }
}
