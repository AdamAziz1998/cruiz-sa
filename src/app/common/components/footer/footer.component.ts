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

  public navigateToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  public navigateToTermsAndConditions() {
    this.router.navigate(['/terms-and-conditions']);
  }

  public onClickTwitter() {
    this.router.navigateByUrl('TODO');
  }

  public onClickInstagram() {
    this.router.navigateByUrl('TODO');
  }

  public onClickTikTok() {
    this.router.navigateByUrl('TODO');
  }
}
