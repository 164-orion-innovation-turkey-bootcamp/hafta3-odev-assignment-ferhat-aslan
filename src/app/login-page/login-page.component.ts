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
  //defined a variable that named loginForm for Form
  constructor( private fb: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    //the function that named createLoginForm was called when view was started.
    this.createLoginForm();
  }
  //defined a function that named createLogin form for a formbuilder.
  createLoginForm(){
    this.loginForm=this.fb.group({

      email:[null,[Validators.email,Validators.required]],
      password: [null,Validators.required],

    });
  }
  //defined a function for login operation.
  login(){
//http was used to http request
    this.http.get<any>("http://localhost:3000/users").subscribe(
      //the suscribe method has two output.
      //if reguest ended up succesfully
      res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){

//if login operation ended up successfully then localstorage will save user.firstname.
          localStorage.setItem('user',user.firstname)
          window.alert("başarılı");
          this.loginForm.reset();
          this.router.navigate(['userpage'])
        }//if reguest ended up wrongly
      },err=>{
        window.alert('hata oluştu')


      }
    )
  }
}
