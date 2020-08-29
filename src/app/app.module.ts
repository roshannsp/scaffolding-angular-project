import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { CountryEffects } from './store/effects/country.effects';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country/country.service';

@NgModule({
  declarations: [AppComponent, CountryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([CountryEffects]),
    HttpClientModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
