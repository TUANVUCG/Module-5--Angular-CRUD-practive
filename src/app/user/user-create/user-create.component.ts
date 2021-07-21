import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../model/user';

// @ts-ignore
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = {};
  isSubmitted = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  createNewUser(userForm) {
    this.isSubmitted = true;
    if (userForm.valid) {
      this.userService.save(this.user).subscribe(() => {
          alert('Success');
        },
        () => {
          alert('Fail');
        });
    }
  }
}
