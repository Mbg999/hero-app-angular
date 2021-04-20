import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('length') public length: number;
  @Input('itemsPerPage') public itemsPerPage: number;
  @Input('currentPage') public currentPage: number;
  @Output('moveToPage') private moveToPage = new EventEmitter<number>();
  public totalPages: number;
  public buttons: number[];

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.length / this.itemsPerPage);
    this.buttons = Array(this.totalPages).fill(0).map((x, i) => i+1);
    this.currentPage = 1;
    console.log(this.totalPages);
  }

  public moveTo(page: number): void {
    console.log(page);
    this.moveToPage.emit(page);
  }

  public next(): void {
    this.moveToPage.emit(this.currentPage++);
  }

  public prev(): void {
    this.moveToPage.emit(this.currentPage--);
  }

}
