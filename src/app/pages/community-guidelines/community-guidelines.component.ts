import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { ExpandableCardComponent } from '../../common/components/expandable-card/expandable-card.component';

@Component({
  selector: 'app-community-guidelines',
  imports: [PageTemplateComponent, ExpandableCardComponent],
  templateUrl: './community-guidelines.component.html',
  styleUrl: './community-guidelines.component.scss'
})
export class CommunityGuidelinesComponent {

}
