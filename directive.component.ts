import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

   buttonName = 'show';
   boolean = true;
   

   fruits = [
     { name : 'apple', color : 'red'},
     { name : 'orange' , color : 'orange'},
     { name : 'banana', color : 'yellow'},
     { name : 'mango', color : 'yellow'},
     { name : 'watermelon', color : 'red'}
     
   ]
     public color = "red";
     ramya: boolean=true;
      style={
        color:'red'
      }
  name='hi';
  constructor() { }

  ngOnInit(): void {
  }
     tap()
     {
       this.boolean=!this.boolean
       if(this.boolean)
       this.buttonName='Hide'
       else
       this.buttonName='Show'
     }

    
}
