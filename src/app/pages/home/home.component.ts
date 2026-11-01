import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTemplateComponent, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', // <-- fixed here
})
export class HomeComponent {}
