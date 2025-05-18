import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', // <-- fixed here
})
export class HomeComponent {}
