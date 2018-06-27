import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppSrting } from './config/AppString';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appSrting = AppSrting;

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh-TW');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('zh-TW');

    // --- set i18n begin ---
    this.translate.addLangs(['zh-TW', 'en']);
    this.translate.setDefaultLang('zh-TW');
    const browserLang = this.translate.getBrowserLang(); // 得到浏览器的默认语言
    this.translate.use(browserLang.match(/zh-TW|en/) ? browserLang : 'zh-TW'); // 优先使用浏览器语言
    // --- set i18n end ---
  }
}
