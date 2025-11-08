import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { WhitePageBodyComponent } from '../../common/components/white-page-body/white-page-body.component';
import { ExpandableCardComponent } from '../../common/components/expandable-card/expandable-card.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [PageTemplateComponent, ExpandableCardComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
