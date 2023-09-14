import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
    

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }

    searchByCapital ( term: string ) : Observable<Country[]>{
        const url =`${this.apiUrl}/capital/${term}`;

        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError (error => {
                    console.log(error);
                    return of([])
                })
            ); 
    }

    searchByCountry(term2: string) : Observable<Country[]> {
        const url =`${this.apiUrl}/name/${term2}`;

        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError (error => {
                console.log(error);
                return of([])
            })
        );
      }

      searchByRegion(term3: string): Observable<Country[]> {
        const url =`${this.apiUrl}/region/${term3}`;

        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError (error => {
                console.log(error);
                return of([])
            })
        );
      }

      searchCountryByAlphaCode(term4: string): Observable<Country[]> {
        const url =`${this.apiUrl}/alpha/${term4}`;

        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError (error => {
                console.log(error);
                return of([])
            })
        );
      }
    
}