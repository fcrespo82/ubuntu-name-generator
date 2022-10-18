import {Component, Input} from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styles: []
})
export class PhotoComponent {
  @Input() url
  @Input() title
  @Input() caption
}