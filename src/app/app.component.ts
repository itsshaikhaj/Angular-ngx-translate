import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-i18n';
  defaultLanguage: any = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'es']);
  }

  ngOnInit(): void {
    // Set up language preferences
    this.translateService.setDefaultLang(this.defaultLanguage);
    console.log('this.defaultLanguage :', this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }
}
