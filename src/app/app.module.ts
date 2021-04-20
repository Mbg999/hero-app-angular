import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// MODULES
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shareds/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ValidationMessagesComponent } from './components/shareds/validation-messages/validation-messages.component';
import { HerosContainerComponent } from './components/heros-container/heros-container.component';
import { HerosGridComponent } from './components/heros-grid/heros-grid.component';

// PIPES
import { ImgPipe } from './pipes/img.pipe';
import { PaginationComponent } from './components/shareds/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HeroFormComponent,
    ValidationMessagesComponent,
    ImgPipe,
    HerosContainerComponent,
    HerosGridComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
