import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {};

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.findById(id);
    });
  }

  ngOnInit() {
  }

  findById(id) {
    this.userService.findById(id).subscribe(user => this.user = user);
  }
}
