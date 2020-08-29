import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CountryCardListComponent } from './components/country-card-list/country-card-list.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { ErrorComponent } from './components/error/error.component';
import { CountryCardSkeletonComponent } from './components/country-card-skeleton/country-card-skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    SearchComponent,
    CountryCardListComponent,
    CountryCardComponent,
    ErrorComponent,
    CountryCardSkeletonComponent,
  ],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [
    SearchComponent,
    CountryCardListComponent,
    CountryCardComponent,
    ErrorComponent,
    CountryCardSkeletonComponent,
  ],
})
export class SharedModule {}
