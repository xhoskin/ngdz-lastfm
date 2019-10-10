import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistService {

  constructor(
    private http: HttpClient
  ) {
    console.log('ArtistService');
  }
}
