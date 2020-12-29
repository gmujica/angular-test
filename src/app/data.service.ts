import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //fech data
  getData() {
    /*const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };*/

    let url='https://datos.gob.es/apidata/catalog/distribution'

    return this.http.get(url)
  }
  
}
