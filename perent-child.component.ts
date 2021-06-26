import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent-child',
  templateUrl: './perent-child.component.html',
  styleUrls: ['./perent-child.component.css']
})
export class PerentChildComponent implements OnInit {
cmpy:any;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(data:any){
    console.log(data);
    alert("after message" +data)
  }
 
}


