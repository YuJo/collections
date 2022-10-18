import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n-button',
  templateUrl: './i18n-button.component.html',
  styleUrls: ['./i18n-button.component.scss']
})
export class I18nButtonComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  
  changeLang() {
    const currentLang = localStorage.getItem('currentLang');
    const lang = currentLang==='en' ? 'zh-TW' : 'en';
    this.translateService.use(lang);
    localStorage.setItem('currentLang', lang);
  }

}
