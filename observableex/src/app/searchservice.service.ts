import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {filter } from  'rxjs/operators';
 import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {

  	constructor(private http: HttpClient) {}
 	url = 'http://localhost:3000/results';

   	getUsers(): Observable<any> {
       return this.http.get(this.url)
    	.pipe(map ( res => res)
			//filter(res => res.code === 200)
		);
    }

}
