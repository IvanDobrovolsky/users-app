import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../../../services';

@Component({
  selector: 'users-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: [
    'user-edit.component.css'
  ]
})
export class UserEditComponent implements OnInit, OnDestroy {
  private userForm: FormGroup;
  private readonly emailPattern  = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  private readonly phonePattern = '^[0-9\\-\\+]{9,15}$';
  private readonly websitePattern = '[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)';
  private subsriptions: Array<Subscription> = [];
  private userData: IUser;

  constructor (private apiService: ApiService,
               private formBuilder: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const routerSubscription = this
      .activatedRoute
      .params
      .switchMap((params: Params, index: number) => {
        return this.apiService.getUser(params.id);
      })
      .subscribe((user: IUser) => {
        this.userData = user;
      });

     this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      website: ['', [Validators.required, Validators.pattern(this.websitePattern)]]
    });

    const formSubscription = this.userForm.valueChanges.subscribe((updatedBasicUserInfo: IBasicUserInfo) => {
      this.updateView(updatedBasicUserInfo);
    });

    this.subsriptions = [
      ...this.subsriptions,
      routerSubscription,
      formSubscription
    ];
  }

  public ngOnDestroy(): void {
    for (const subscription of this.subsriptions) {
      subscription.unsubscribe();
    }
  }

  public updateUser(): void {
    if (this.userForm.invalid) {
      return ;
    }

    const apiServiceSubscription = this.apiService
      .updateUser(this.userData.id, this.userData)
      .subscribe((user: IUser) => {
        console.log(user);
        alert('Updated! Will be redirected to the users list page...');
        this.router.navigate(['/user/list']);
      });

    this.subsriptions = [
      ...this.subsriptions,
      apiServiceSubscription
    ];
  }

  private updateView(updatedBasicUserInfo: IBasicUserInfo): void {
    this.userData = Object.assign(this.userData, updatedBasicUserInfo);
  }
}
