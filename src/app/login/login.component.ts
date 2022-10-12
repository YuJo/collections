import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiMiddlewareService } from '../api-middleware.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public translateService: TranslateService,
    private ApiMiddlewareService: ApiMiddlewareService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.ApiMiddlewareService.login().subscribe(res => {
      console.log(res);
      this.router.navigate(['main-page']);
    })
    
  }


  changeLang() {
    const currentLang = localStorage.getItem('currentLang');
    const lang = currentLang==='en' ? 'zh-TW' : 'en';
    this.translateService.use(lang);
    localStorage.setItem('currentLang', lang);
  }

}
