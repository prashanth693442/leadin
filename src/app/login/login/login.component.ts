import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private fb: FormBuilder,
    public loginServ:LoginService
    ) {
     }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['', Validators.required],
    });
    this.loginServ.getUser().subscribe((res:any)=>{
      let a=res;
    })
  }
  onSubmit(){
    debugger
    const _userForm = this.loginForm.value;
    const body={
      "uid":_userForm.username,
      "pwd":_userForm.password
    }

  }

}
