import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/core/shared/interfaces/people.interface';
import { CacheService } from 'src/app/core/shared/services/cache/cache.service';

@Component({
  selector: 'wb-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() character!: People;
  @Input() loading!: boolean;

  constructor(private router: Router, private cacheService: CacheService) {}

  ngOnInit() {}

  test() {
    this.navigate();
  }

  navigate() {
    this.cacheService.set(
      this.cacheService.constants.CHARACTER,
      this.character
    );
    this.router.navigate([String('/search/character/1')]);
  }
}
