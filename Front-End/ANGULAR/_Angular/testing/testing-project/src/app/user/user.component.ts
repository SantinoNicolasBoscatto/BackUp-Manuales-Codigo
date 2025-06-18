import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then(data => this.data = data)
  }

  user?: {name: string};
  isLoggin = false;
  data?: any;
  private userService = inject(UserService)
  private dataService = inject(DataService)
}
