import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService, LANGUAGE,HttpClient } from '../../../../shared/utils/utils';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../../../services/user/user.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  // for template
  public activeLanguage = LANGUAGE;
  remember: boolean = false;
  email:string;

  constructor(private translate: TranslateService,
    private http: HttpClient, private userService:UserService,
    public router: Router) {
      this.translate.setDefaultLang(this.activeLanguage);
     }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.email = localStorage.getItem('email') || '';
    if(this.email.length>2){
      this.remember = true;
    }
  }
  login(form:NgForm){
    if(form.invalid){
      return;
    }

    let user = new User(null,form.value.email,form.value.password);
    debugger
    this.userService.login(user,form.value.remember)
      .subscribe((response)=>{
        this.router.navigate(['/'])
        console.log(response);
      })
  }

}
