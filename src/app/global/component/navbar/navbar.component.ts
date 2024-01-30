import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  configData: any;
  // Replace this array in your TypeScript file
  languages: any[] = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Spanish',
      code: 'es',
    },
    {
      name: 'French',
      code: 'fr',
    },
    {
      name: 'German',
      code: 'de',
    },
    {
      name: 'Italian',
      code: 'it',
    },
    {
      name: 'Portuguese',
      code: 'pt',
    },
    {
      name: 'Russian',
      code: 'ru',
    },
    {
      name: 'Chinese',
      code: 'zh-CN',
    },
    {
      name: 'Japanese',
      code: 'ja',
    },
    {
      name: 'Arabic',
      code: 'ar',
    },
    {
      name: 'Urdu',
      code: 'ur',
    },
    // Add more languages as needed
  ];

  selectedlanguage!: string;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {
    this.selectedlanguage = 'en';
  }

  changeLanguage(lang: string): void {
    this.selectedlanguage = lang;
    this.translateService.use(lang);
  }
}
