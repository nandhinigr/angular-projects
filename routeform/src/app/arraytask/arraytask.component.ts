import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraytask',
  templateUrl: './arraytask.component.html',
  styleUrls: ['./arraytask.component.css']
})
export class ArraytaskComponent implements OnInit {
//group array
    peoplemycountry: any[]=[{
	  'country' : 'india',
	  'people' : [{
	
   "name": "tamilnadu"},
{
	
  "name": "chennai"
},
]
},
{
'country' : 'Us',
'people' :[{
	
   "name" : "day meyers"
},
{
	
   "name": "aguire"
},
]
}
];

//normal array
 userlist : Users[]=[
   {
 "name": "nandhis"
   },
  {
"name": "alia"	
  }]
 
constructor()
{}

 ngOnInit(){
//obj array

this.model=[{
	
  firstname:'nandhih',
  lastname:'gfdddd',
  email:'hgh@gmai.com'	
     },

     { 
firstname:'alia',
lastname:'bhatt',
email:'alia@gmai.com'	
    }
    ]
    }
 }
