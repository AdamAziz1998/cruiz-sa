import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  public onClickHome() {
    this.router.navigate(['/home']); // Adjust the route as per your application's routing configuration
  }

  public onClickFrequentlyAskedQuestions() {
    this.router.navigate(['/faq']);
  }

  public onClickPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  public onClickTermsAndConditions() {
    this.router.navigate(['/terms-and-conditions']);
  }
}
