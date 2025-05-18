import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FrequentlyAskedQuestionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
];
