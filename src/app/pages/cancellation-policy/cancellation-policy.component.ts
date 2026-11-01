import { Component } from '@angular/core';
import { PageTemplateComponent } from "../../common/components/page-template/page-template.component";
import { ExpandableCardComponent } from "../../common/components/expandable-card/expandable-card.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-cancellation-policy',
  imports: [PageTemplateComponent, ExpandableCardComponent, TranslatePipe],
  templateUrl: './cancellation-policy.component.html',
  styleUrl: './cancellation-policy.component.scss'
})
export class CancellationPolicyComponent {

}
