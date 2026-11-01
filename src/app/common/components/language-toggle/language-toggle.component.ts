import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang() || 'en';
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.currentLanguage = selectElement.value;

    this.translate.use(this.currentLanguage);

    localStorage.setItem('user_language', this.currentLanguage);
  }
}
