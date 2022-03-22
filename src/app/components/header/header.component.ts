import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ɵConsole,
} from '@angular/core';

@Component({
  selector: 'wb-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    // this.onBackClick();
  }

  constructor() {}

  ngOnInit() {}

  onBackClick() {}
}
