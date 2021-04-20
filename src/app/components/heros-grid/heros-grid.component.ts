import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// INTERFACES
import { Hero } from './../../interfaces/hero';

@Component({
  selector: 'app-heros-grid',
  templateUrl: './heros-grid.component.html',
  styleUrls: ['./heros-grid.component.scss']
})
export class HerosGridComponent {

  @Input('heros') public heros!: Hero[];
  @Output('edit') public edit = new EventEmitter<Hero>();
  @Output('remove') public remove = new EventEmitter<Hero>();

}
