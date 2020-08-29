import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';

describe('CountryService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return countries that contain expected country', () => {
    const expectedCountry = {
      name: 'Thailand',
      topLevelDomain: ['.th'],
      alpha2Code: 'TH',
      alpha3Code: 'THA',
      callingCodes: ['66'],
      capital: 'Bangkok',
      altSpellings: [
        'TH',
        'Prathet',
        'Thai',
        'Kingdom of Thailand',
        'ราชอาณาจักรไทย',
        'Ratcha Anachak Thai',
      ],
      region: 'Asia',
      subregion: 'South-Eastern Asia',
      population: 65327652,
      latlng: [15, 100],
      demonym: 'Thai',
      area: 513120,
      gini: 40,
      timezones: ['UTC+07:00'],
      borders: ['MMR', 'KHM', 'LAO', 'MYS'],
      nativeName: 'ประเทศไทย',
      numericCode: '764',
      currencies: [
        {
          code: 'THB',
          name: 'Thai baht',
          symbol: '฿',
        },
      ],
      languages: [
        {
          iso639_1: 'th',
          iso639_2: 'tha',
          name: 'Thai',
          nativeName: 'ไทย',
        },
      ],
      translations: {
        de: 'Thailand',
        es: 'Tailandia',
        fr: 'Thaïlande',
        ja: 'タイ',
        it: 'Tailandia',
        br: 'Tailândia',
        pt: 'Tailândia',
        nl: 'Thailand',
        hr: 'Tajland',
        fa: 'تایلند',
      },
      flag: 'https://restcountries.eu/data/tha.svg',
      regionalBlocs: [
        {
          acronym: 'ASEAN',
          name: 'Association of Southeast Asian Nations',
          otherAcronyms: [],
          otherNames: [],
        },
      ],
      cioc: 'THA',
    };

    service
      .get()
      .subscribe(
        (countries) =>
          expect(countries).toContain(expectedCountry, 'expected heroes'),
        fail
      );
  });
});
