import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { CancellationPolicyComponent } from './pages/cancellation-policy/cancellation-policy.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FrequentlyAskedQuestionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'cancellation-policy', component: CancellationPolicyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: 'home' },
];
