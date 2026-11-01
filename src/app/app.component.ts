import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'customer-frontend';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const savedLang = localStorage.getItem('user_language');

    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      const browserLang = this.translate.getBrowserLang();
      const startingLang = browserLang?.match(/en|sa/) ? browserLang : 'en';
      this.translate.use(startingLang);
    }

    this.translate.onLangChange.subscribe((event) => {
      const isRtl = event.lang === 'sa';
      this.document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      this.document.documentElement.lang = event.lang;
    });
  }
}
