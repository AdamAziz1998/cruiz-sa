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
    this.router.navigate(['/faq']).then();
  }

  public navigateToCancellationPolicy() {
    this.router.navigate(['/cancellation-policy']).then();
  }

  public navigateToAboutUs() {
    this.router.navigate(['/about-us']).then();
  }

  public navigateToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then();
  }

  public navigateToCommunityGuidelines() {
    this.router.navigate(['/community-guidelines']).then();
  }

  public navigateToTermsAndConditions() {
    this.router.navigate(['/terms-and-conditions']).then();
  }

  public onClickTwitter() {
    window.open('https://x.com/cruizplatform');
  }

  public onClickInstagram() {
    window.open('https://www.instagram.com/cruiz.app');
  }

  public onClickTikTok() {
    window.open('https://www.tiktok.com/@cruiz.app');
  }
}
