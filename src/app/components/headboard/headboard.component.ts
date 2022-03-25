import { Component, Input, Output, EventEmitter } from '@angular/core';
import { People } from 'src/app/core/shared/interfaces/people.interface';

@Component({
  selector: 'wb-headboard',
  styleUrls: ['./headboard.component.scss'],
  templateUrl: './headboard.component.html',
})
export class HeadboardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
