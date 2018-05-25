import { Component, OnInit, Input } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styles: []
})
export class PhotoComponent implements OnInit {
  @Input() url
  @Input() title
  @Input() caption

  constructor() { }

  ngOnInit() {
  }

}
