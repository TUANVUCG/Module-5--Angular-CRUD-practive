import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserCreateComponent} from './user/user-create/user-create.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
  },
  {
    path: 'create',
    component: UserCreateComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
