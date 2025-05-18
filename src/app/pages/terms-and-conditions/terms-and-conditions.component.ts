import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { WhitePageBodyComponent } from '../../common/components/white-page-body/white-page-body.component';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [PageTemplateComponent, WhitePageBodyComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {}
