import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = {};

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getById(id);
    });
  }

  ngOnInit() {
  }

  getById(id) {
    return this.userService.findById(id).subscribe(user => {
      this.user = user;
    });
  }

  editById(id) {
    return this.userService.editById(id, this.user).subscribe(() => {
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
