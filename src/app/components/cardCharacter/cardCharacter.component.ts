import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/core/shared/interfaces/people.interface';

@Component({
  selector: 'wb-cardCharacter',
  styleUrls: ['./cardCharacter.component.scss'],
  templateUrl: './cardCharacter.component.html',
})
export class CardCharacterComponent {
  @Input() character!: People;
}
