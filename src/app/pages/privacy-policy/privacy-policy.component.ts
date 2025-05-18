import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/components/header/header.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { WhitePageBodyComponent } from '../../common/components/white-page-body/white-page-body.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [PageTemplateComponent, WhitePageBodyComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
