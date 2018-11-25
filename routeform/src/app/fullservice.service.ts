import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullserviceService {

  constructor() { }
 getData(){
return[
{
	name: 'nandhini',
	location:'chennai'
},
{
	name: 'alia',
	location: 'chennai'

}
]

  }
}
