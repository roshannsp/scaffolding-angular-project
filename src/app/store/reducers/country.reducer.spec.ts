import * as fromCountry from './country.reducer';
import {
  getCountry,
  getCountrySuccess,
  queryCountry,
} from '../actions/country.actions';
import { Action } from '@ngrx/store';

const mockCountries = [
  {
    name: 'Afghanistan',
    topLevelDomain: ['.af'],
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: ['93'],
    capital: 'Kabul',
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 27657145,
    latlng: [33, 65],
    demonym: 'Afghan',
    area: 652230,
    gini: 27.8,
    timezones: ['UTC+04:30'],
    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    nativeName: 'افغانستان',
    numericCode: '004',
    currencies: [
      {
        code: 'AFN',
        name: 'Afghan afghani',
        symbol: '؋',
      },
    ],
    languages: [
      {
        iso639_1: 'ps',
        iso639_2: 'pus',
        name: 'Pashto',
        nativeName: 'پښتو',
      },
      {
        iso639_1: 'uz',
        iso639_2: 'uzb',
        name: 'Uzbek',
        nativeName: 'Oʻzbek',
      },
      {
        iso639_1: 'tk',
        iso639_2: 'tuk',
        name: 'Turkmen',
        nativeName: 'Türkmen',
      },
    ],
    translations: {
      de: 'Afghanistan',
      es: 'Afganistán',
      fr: 'Afghanistan',
      ja: 'アフガニスタン',
      it: 'Afghanistan',
      br: 'Afeganistão',
      pt: 'Afeganistão',
      nl: 'Afghanistan',
      hr: 'Afganistan',
      fa: 'افغانستان',
    },
    flag: 'https://restcountries.eu/data/afg.svg',
    regionalBlocs: [
      {
        acronym: 'SAARC',
        name: 'South Asian Association for Regional Cooperation',
        otherAcronyms: [],
        otherNames: [],
      },
    ],
    cioc: 'AFG',
  },
  {
    name: 'Åland Islands',
    topLevelDomain: ['.ax'],
    alpha2Code: 'AX',
    alpha3Code: 'ALA',
    callingCodes: ['358'],
    capital: 'Mariehamn',
    altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 28875,
    latlng: [60.116667, 19.9],
    demonym: 'Ålandish',
    area: 1580,
    gini: null,
    timezones: ['UTC+02:00'],
    borders: [],
    nativeName: 'Åland',
    numericCode: '248',
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
      },
    ],
    languages: [
      {
        iso639_1: 'sv',
        iso639_2: 'swe',
        name: 'Swedish',
        nativeName: 'svenska',
      },
    ],
    translations: {
      de: 'Åland',
      es: 'Alandia',
      fr: 'Åland',
      ja: 'オーランド諸島',
      it: 'Isole Aland',
      br: 'Ilhas de Aland',
      pt: 'Ilhas de Aland',
      nl: 'Ålandeilanden',
      hr: 'Ålandski otoci',
      fa: 'جزایر الند',
    },
    flag: 'https://restcountries.eu/data/ala.svg',
    regionalBlocs: [
      {
        acronym: 'EU',
        name: 'European Union',
        otherAcronyms: [],
        otherNames: [],
      },
    ],
    cioc: '',
  },
  {
    name: 'Albania',
    topLevelDomain: ['.al'],
    alpha2Code: 'AL',
    alpha3Code: 'ALB',
    callingCodes: ['355'],
    capital: 'Tirana',
    altSpellings: ['AL', 'Shqipëri', 'Shqipëria', 'Shqipnia'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 2886026,
    latlng: [41, 20],
    demonym: 'Albanian',
    area: 28748,
    gini: 34.5,
    timezones: ['UTC+01:00'],
    borders: ['MNE', 'GRC', 'MKD', 'KOS'],
    nativeName: 'Shqipëria',
    numericCode: '008',
    currencies: [
      {
        code: 'ALL',
        name: 'Albanian lek',
        symbol: 'L',
      },
    ],
    languages: [
      {
        iso639_1: 'sq',
        iso639_2: 'sqi',
        name: 'Albanian',
        nativeName: 'Shqip',
      },
    ],
    translations: {
      de: 'Albanien',
      es: 'Albania',
      fr: 'Albanie',
      ja: 'アルバニア',
      it: 'Albania',
      br: 'Albânia',
      pt: 'Albânia',
      nl: 'Albanië',
      hr: 'Albanija',
      fa: 'آلبانی',
    },
    flag: 'https://restcountries.eu/data/alb.svg',
    regionalBlocs: [
      {
        acronym: 'CEFTA',
        name: 'Central European Free Trade Agreement',
        otherAcronyms: [],
        otherNames: [],
      },
    ],
    cioc: 'ALB',
  },
  {
    name: 'Algeria',
    topLevelDomain: ['.dz'],
    alpha2Code: 'DZ',
    alpha3Code: 'DZA',
    callingCodes: ['213'],
    capital: 'Algiers',
    altSpellings: ['DZ', 'Dzayer', 'Algérie'],
    region: 'Africa',
    subregion: 'Northern Africa',
    population: 40400000,
    latlng: [28, 3],
    demonym: 'Algerian',
    area: 2381741,
    gini: 35.3,
    timezones: ['UTC+01:00'],
    borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
    nativeName: 'الجزائر',
    numericCode: '012',
    currencies: [
      {
        code: 'DZD',
        name: 'Algerian dinar',
        symbol: 'د.ج',
      },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ara',
        name: 'Arabic',
        nativeName: 'العربية',
      },
    ],
    translations: {
      de: 'Algerien',
      es: 'Argelia',
      fr: 'Algérie',
      ja: 'アルジェリア',
      it: 'Algeria',
      br: 'Argélia',
      pt: 'Argélia',
      nl: 'Algerije',
      hr: 'Alžir',
      fa: 'الجزایر',
    },
    flag: 'https://restcountries.eu/data/dza.svg',
    regionalBlocs: [
      {
        acronym: 'AU',
        name: 'African Union',
        otherAcronyms: [],
        otherNames: [
          'الاتحاد الأفريقي',
          'Union africaine',
          'União Africana',
          'Unión Africana',
          'Umoja wa Afrika',
        ],
      },
      {
        acronym: 'AL',
        name: 'Arab League',
        otherAcronyms: [],
        otherNames: [
          'جامعة الدول العربية',
          'Jāmiʻat ad-Duwal al-ʻArabīyah',
          'League of Arab States',
        ],
      },
    ],
    cioc: 'ALG',
  },
  {
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
  },
];

describe('Country Reducer test', () => {
  const { initialState } = fromCountry;
  it('should return the default state', () => {
    const action: Action = { type: '' };
    const state = fromCountry.reducer(undefined, action);
    expect(state).toBe(initialState);
  });
  it('should set loading to true', () => {
    const action = getCountry();
    const state = fromCountry.reducer(initialState, action);

    expect(state.loading).toEqual(true);
  });
  it('should set countries', () => {
    const action = getCountrySuccess({ countries: mockCountries });
    const state = fromCountry.reducer(initialState, action);

    expect(state.loading).toEqual(false);
    expect(state.countries).toEqual(mockCountries);
  });
  it(`should get only Thailand if query with 'tha'`, () => {
    const mockQueriedCountry = [
      {
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
      },
    ];
    const getCountrySuccessAction = getCountrySuccess({
      countries: mockCountries,
    });
    const getCountryState = fromCountry.reducer(
      initialState,
      getCountrySuccessAction
    );
    const queryCountryAction = queryCountry({ query: 'tha' });
    const queryCountryState = fromCountry.reducer(
      getCountryState,
      queryCountryAction
    );

    expect(queryCountryState.loading).toEqual(false);
    expect(queryCountryState.queriedCountries).toEqual(mockQueriedCountry);
  });
  it(`should get Åland Islands and Thailand from mock countries if query with 'land'`, () => {
    const mockQueriedCountry = [
      {
        name: 'Åland Islands',
        topLevelDomain: ['.ax'],
        alpha2Code: 'AX',
        alpha3Code: 'ALA',
        callingCodes: ['358'],
        capital: 'Mariehamn',
        altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
        region: 'Europe',
        subregion: 'Northern Europe',
        population: 28875,
        latlng: [60.116667, 19.9],
        demonym: 'Ålandish',
        area: 1580,
        gini: null,
        timezones: ['UTC+02:00'],
        borders: [],
        nativeName: 'Åland',
        numericCode: '248',
        currencies: [
          {
            code: 'EUR',
            name: 'Euro',
            symbol: '€',
          },
        ],
        languages: [
          {
            iso639_1: 'sv',
            iso639_2: 'swe',
            name: 'Swedish',
            nativeName: 'svenska',
          },
        ],
        translations: {
          de: 'Åland',
          es: 'Alandia',
          fr: 'Åland',
          ja: 'オーランド諸島',
          it: 'Isole Aland',
          br: 'Ilhas de Aland',
          pt: 'Ilhas de Aland',
          nl: 'Ålandeilanden',
          hr: 'Ålandski otoci',
          fa: 'جزایر الند',
        },
        flag: 'https://restcountries.eu/data/ala.svg',
        regionalBlocs: [
          {
            acronym: 'EU',
            name: 'European Union',
            otherAcronyms: [],
            otherNames: [],
          },
        ],
        cioc: '',
      },
      {
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
      },
    ];
    const getCountrySuccessAction = getCountrySuccess({
      countries: mockCountries,
    });
    const getCountryState = fromCountry.reducer(
      initialState,
      getCountrySuccessAction
    );
    const queryCountryAction = queryCountry({ query: 'land' });
    const queryCountryState = fromCountry.reducer(
      getCountryState,
      queryCountryAction
    );

    expect(queryCountryState.loading).toEqual(false);
    expect(queryCountryState.queriedCountries).toEqual(mockQueriedCountry);
  });
  it(`should get empty array from mock countries if query with 'Hong'`, () => {
    const mockQueriedCountry = [];
    const getCountrySuccessAction = getCountrySuccess({
      countries: mockCountries,
    });
    const getCountryState = fromCountry.reducer(
      initialState,
      getCountrySuccessAction
    );
    const queryCountryAction = queryCountry({ query: 'Hong' });
    const queryCountryState = fromCountry.reducer(
      getCountryState,
      queryCountryAction
    );

    expect(queryCountryState.loading).toEqual(false);
    expect(queryCountryState.queriedCountries.length).toEqual(0);
  });
});
