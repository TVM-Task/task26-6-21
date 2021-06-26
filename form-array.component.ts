import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { canleave } from '../unsave.guard';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit,canleave {
Username: FormControl =new  FormControl();
  username: any;
  constructor() { }
  leave():boolean{
    if(this.Username.dirty){
      return window.confirm("unsaves changes");
    }
    return true;
  }
  ngOnInit(): void {
           
  }
}
