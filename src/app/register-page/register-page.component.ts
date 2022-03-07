import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
public registerForm!:FormGroup;

  constructor(private formB:FormBuilder,private router:Router,private http:HttpClient) { }
  daba='../../db.json'
  ngOnInit(): void {
    this.registerForm=this.formB.group({

firstname:['',[Validators.required,Validators.minLength(3)]],
lastname:['',[Validators.required,Validators.minLength(3)]],
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.minLength(5)]]
    });
  }
 async register(){
    console.log(this.registerForm.value);

  await  this.http.post("http://localhost:3000/users",this.registerForm.value).subscribe(req=>{console.log("başarılı");
  window.alert("başarılı");
  this.router.navigate(['loginpage'])
  },err=>{console.log("error");
  })
  this.http.get<any>("http://localhost:3000/users").subscribe(req=>{console.log(req);
  console.log(this.registerForm.value);})


}
}
