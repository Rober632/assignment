import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor( private translate : TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
  setLanguage(lang : any ){
    this.translate.use(lang);
  }
}

