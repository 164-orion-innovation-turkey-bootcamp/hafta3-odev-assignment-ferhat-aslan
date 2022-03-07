import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
name =localStorage.getItem('user')
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.router.navigate(['loginpage']);
  localStorage.clear();
}
}
