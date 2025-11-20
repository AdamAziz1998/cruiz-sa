import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}

  public navigateToFaq() {
    this.router.navigate(['/faq']);
  }

  public navigateToCancellationPolicy() {
    this.router.navigate(['/cancellation-policy']);
  }

  public navigateToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  public navigateToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  public navigateToTermsAndConditions() {
    this.router.navigate(['/terms-and-conditions']);
  }

  public onClickTwitter() {
    this.router.navigateByUrl('https://x.com/appcruiz65820');
  }

  public onClickInstagram() {
    this.router.navigateByUrl('https://www.instagram.com/cruiz.app');
  }

  public onClickTikTok() {
    this.router.navigateByUrl('https://www.tiktok.com/@cruiz.app');
  }
}
