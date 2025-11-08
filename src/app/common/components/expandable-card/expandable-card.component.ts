import { Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-expandable-card',
  imports: [],
  templateUrl: './expandable-card.component.html',
  styleUrl: './expandable-card.component.scss',
})
export class ExpandableCardComponent {
  @Input() title: string = '';
  @ViewChild('content') content!: ElementRef<HTMLElement>;

  isOpen: boolean = false;
  heightSet: number = 0;

  toggle() {
    this.isOpen = !this.isOpen;
    this.heightSet = this.content.nativeElement.scrollHeight + 40;
  }
}
