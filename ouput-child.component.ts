import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-ouput-child',
  templateUrl: './ouput-child.component.html',
  styleUrls: ['./ouput-child.component.css']
})
export class OuputChildComponent implements OnInit {

  
     @Output() submit = new EventEmitter <any> ();

  constructor() { }

  ngOnInit(): void {
  }

    onclick()
    {
      this.submit.emit('SUBMIT FROM CHILD');
    }  
 
}
