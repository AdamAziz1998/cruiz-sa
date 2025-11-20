import { Component } from '@angular/core';
import { PageTemplateComponent } from "../../common/components/page-template/page-template.component";
import { ExpandableCardComponent } from "../../common/components/expandable-card/expandable-card.component";

@Component({
  selector: 'app-cancellation-policy',
  imports: [PageTemplateComponent, ExpandableCardComponent],
  templateUrl: './cancellation-policy.component.html',
  styleUrl: './cancellation-policy.component.scss'
})
export class CancellationPolicyComponent {

}
