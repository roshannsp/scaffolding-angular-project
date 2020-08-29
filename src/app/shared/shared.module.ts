import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CountryCardListComponent } from './components/country-card-list/country-card-list.component';
import { CountryCardComponent } from './components/country-card/country-card.component';

@NgModule({
  declarations: [
    SearchComponent,
    CountryCardListComponent,
    CountryCardComponent,
  ],
  imports: [CommonModule],
  exports: [SearchComponent, CountryCardListComponent, CountryCardComponent],
})
export class SharedModule {}
