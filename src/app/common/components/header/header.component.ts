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


  public onClickTwitter() {
    this.router.navigateByUrl('TODO');
  }

  public onClickInstagram() {
    this.router.navigateByUrl('TODO');
  }

  public onClickTikTok() {
    this.router.navigateByUrl('TODO');
  }

  public navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
