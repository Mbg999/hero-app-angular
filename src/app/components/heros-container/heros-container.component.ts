import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// RXJS
import { Subscription } from 'rxjs';

// SERVICES
import { HeroService } from './../../services/hero.service';

// INTERFACES
import { Hero } from './../../interfaces/hero';

// SWEETALERT2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heros-container',
  templateUrl: './heros-container.component.html',
  styleUrls: ['./heros-container.component.scss']
})
export class HerosContainerComponent implements OnInit, OnDestroy {

  public showFormModal: boolean = false;
  public toUpdateHero?: Hero;
  public heros!: Hero[];
  private heros$!: Subscription;

  constructor(private _heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heros$ = this._heroService.heros$.subscribe(h => this.heros = h);
    this.route.params.subscribe(p => this.search(p.name));

  }

  ngOnDestroy(): void {
    this.heros$.unsubscribe();
  }

  public toggleFormModal(): void {
    this.showFormModal = !this.showFormModal;
  }

  public create(hero: Hero): void {
    this._heroService.create(hero);
    this.toggleFormModal();
  }

  public edit(hero: Hero): void {
    this.toUpdateHero = hero;
    this.toggleFormModal();
  }

  public update(hero: Hero): void {
    if(this._heroService.update(hero)) {
      this.toggleFormModal();
      this.toUpdateHero = null;
    }
  }

  public remove(hero: Hero): void {
    Swal.fire({
      title: "¿Desea borrar este heroe?",
      text: `${hero.name}`,
      icon: 'error',
      confirmButtonText: 'Borrar',
      confirmButtonColor: '#EF4444',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#3b82f6'
    })
    .then(result => {
      if(result.isConfirmed) this._heroService.remove(hero.id);
    });
  }

  public search(value: string): void {
    this.heros = value ?
     this._heroService.searchByName(value.toLowerCase())
    : this._heroService.getHeros();
  }

  public closeFormModal(): void {
    this.toggleFormModal();
    this.toUpdateHero = null;
  }
}
