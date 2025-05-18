import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-template',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss',
})
export class PageTemplateComponent {}
