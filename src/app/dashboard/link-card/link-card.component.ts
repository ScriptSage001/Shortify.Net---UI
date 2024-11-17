import { Component } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.scss'
})
export class LinkCardComponent {
  favicon: string = '';
  title: string = '';
  shortenedUrl: string = '';

  copyLink() {

  }

  shareLink() {
    
  }
}
