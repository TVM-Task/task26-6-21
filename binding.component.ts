import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
   name="TVM";
   test={count:0};
   task={count:"gobi"};
   hello={'name':'bhavani'};
  welcome="tamil";
   
   printname(){
     return this.task.count;
   }
   word={};
   increasecount(){
     this.test.count++;
   }
   classname="test";

  
   s="/assets/angular.png";
   w="300";
   h="300";
   
   print(event:any){
  console.log(event);
  this.name=event.target.value;
}
  constructor() { }

  ngOnInit(): void {
  }
   clickme(){
    console.log("button clicked");
    alert("button clicked successfully");
    
   }
   submit()
   {
  console.log("onsubmit");
  alert("submited successfully");
   }
}

