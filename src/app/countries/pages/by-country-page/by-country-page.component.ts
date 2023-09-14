import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor( private service : CountriesService) {};

  public searchByCountry( term2 : string) {
    this.service.searchByCountry( term2 )
      .subscribe( countries => {
        this.countries = countries;
      });

  }
}
