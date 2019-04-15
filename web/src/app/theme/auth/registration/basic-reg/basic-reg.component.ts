import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import swal from 'sweetalert';
import { User } from 'src/app/models/user.model';
import {TranslateService, LANGUAGE,HttpClient } from '../../../../shared/utils/utils';
import { UserService } from '../../../../services/user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  // reactive forms
  forms: FormGroup;

  public activeLanguage = LANGUAGE;
  constructor(private translate: TranslateService,
              private http: HttpClient, private userService:UserService,
              public router: Router) {
                this.translate.setDefaultLang(this.activeLanguage);
               }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.forms = new FormGroup({
      name: new FormControl( null , Validators.required ),
      email: new FormControl( null , [Validators.required, Validators.email] ),
      password1: new FormControl( null , Validators.required ),
      password2: new FormControl( null , Validators.required )
    }, { validators: this.theyAraEqual( 'password1', 'password2' )  } );
  }

  /**
   *
   * @param field1 receives the initial password
   * @param field2 receive the end password
   */
  theyAraEqual(field1:string,field2:string) {
    return ( group: FormGroup ) => {

      let password1 = group.controls[field1].value;
      let password2 = group.controls[field2].value;

      if ( password1 === password2 ) {
        return null;
      }

      return {
        items: true
      };

    };
  }

/**
 * save a user
 */
  registerUser() {
    debugger

   if ( this.forms.invalid ) {
      return;
    }

    // if ( !this.forms.value.condition ) {
    //     this.translate.get('registration.conditionsmessage')
    //   .subscribe((value)=>{
    //     let data = this.arrayMessage(value)
    //     let title = data[0];
    //     let message = data[1];
    //     let icon = data[2]
    //     swal(title, message, icon);
    //   })
    //  return;
    // }


    let user = new User(
      this.forms.value.name,
      this.forms.value.email,
      this.forms.value.password1
    );

    this.userService.createUser( user )
              .subscribe( resp => {
                  debugger
                  this.router.navigate(['/auth/login/simple/'])
              }, (error) => {
                debugger
                console.log(error);
              });

  }

  /**
   *
   * @param value string of multilanguage
   * formater the string
   */
  arrayMessage(value:string){
   return value.split(',');
  }

}
