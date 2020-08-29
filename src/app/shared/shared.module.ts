import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CountryCardListComponent } from './components/country-card-list/country-card-list.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    SearchComponent,
    CountryCardListComponent,
    CountryCardComponent,
    SpinnerComponent,
    ErrorComponent,
  ],
  imports: [CommonModule],
  exports: [
    SearchComponent,
    CountryCardListComponent,
    CountryCardComponent,
    SpinnerComponent,
    ErrorComponent,
  ],
})
export class SharedModule {}
