import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { ExpandableCardComponent } from '../../common/components/expandable-card/expandable-card.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-community-guidelines',
  imports: [PageTemplateComponent, ExpandableCardComponent, TranslatePipe],
  templateUrl: './community-guidelines.component.html',
  styleUrl: './community-guidelines.component.scss'
})
export class CommunityGuidelinesComponent {

}
