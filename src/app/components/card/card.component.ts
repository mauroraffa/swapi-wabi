import { Component, Input, Output, EventEmitter } from '@angular/core';
import { People } from 'src/app/core/shared/interfaces/people.interface';

@Component({
  selector: 'wb-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() character!: People;
  @Input() loading!: boolean;
  @Output() clickCard: EventEmitter<People> = new EventEmitter<People>();

  onClick() {
    this.clickCard.emit(this.character);
  }
}
