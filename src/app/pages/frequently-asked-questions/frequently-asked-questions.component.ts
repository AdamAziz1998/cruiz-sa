import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/components/header/header.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { PageTemplateComponent } from '../../common/components/page-template/page-template.component';
import { WhitePageBodyComponent } from '../../common/components/white-page-body/white-page-body.component';
import { ExpandableCardComponent } from '../../common/components/expandable-card/expandable-card.component';

@Component({
  selector: 'app-frequently-asked-questions',
  imports: [PageTemplateComponent, PageTemplateComponent, ExpandableCardComponent],
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.scss',
})
export class FrequentlyAskedQuestionsComponent {

  

}
