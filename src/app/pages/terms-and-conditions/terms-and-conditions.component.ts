import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { ExpandableCardComponent } from "../../common/components/expandable-card/expandable-card.component";

@Component({
  selector: 'app-terms-and-conditions',
  imports: [PageTemplateComponent, ExpandableCardComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {}
