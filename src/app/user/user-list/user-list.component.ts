import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    return this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  deleteById(id) {
    this.userService.delete(id).subscribe(() => {
        this.getAllUser();
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
