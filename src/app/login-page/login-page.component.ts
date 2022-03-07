import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private fb: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.fb.group({

      email:[null,[Validators.email,Validators.required]],
      password: [null,Validators.required],

    });
  }
  login(){

    this.http.get<any>("http://localhost:3000/users").subscribe(
      res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){
          localStorage.setItem('user','true')
          window.alert("başarılı");
          this.loginForm.reset();
          this.router.navigate([
            'userpage'
          ])
        }
      },err=>{
        window.alert('hata oluştu')


      }
    )
  }
}
