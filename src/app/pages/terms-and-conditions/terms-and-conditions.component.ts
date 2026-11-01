import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { ExpandableCardComponent } from "../../common/components/expandable-card/expandable-card.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [PageTemplateComponent, ExpandableCardComponent, TranslatePipe],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {}
