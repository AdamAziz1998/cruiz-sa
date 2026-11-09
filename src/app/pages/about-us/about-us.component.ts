import { Component } from '@angular/core';
import { PageTemplateComponent } from "../../common/components/page-template/page-template.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [PageTemplateComponent, TranslatePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
