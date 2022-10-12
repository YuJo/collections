import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'zh-TW']);
    translate.setDefaultLang('en');
    localStorage.setItem('currentLang', 'en');
  }
}
