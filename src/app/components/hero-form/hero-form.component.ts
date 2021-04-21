import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// INTERFACE
import { Hero } from './../../interfaces/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Input('hero') public hero!: Hero;
  @Output('close') public close = new EventEmitter<void>();
  @Output('create') public create = new EventEmitter<Hero>();
  @Output('update') public update = new EventEmitter<Hero>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(!this.hero) this.hero = {
      name: '',
      description: ''
    };
    this.createForm();
  }

  private createForm(){
    this.form = this.fb.group({
      name: [this.hero.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]],
      description: [this.hero.description, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      image: [this.hero.image, [
        Validators.maxLength(100),
        Validators.pattern(/^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
      ]],
    });
  }

  public submit(){
    if(this.hero.id) this.update.emit(this.form.value);
    else this.create.emit(this.form.value);
  }
}
