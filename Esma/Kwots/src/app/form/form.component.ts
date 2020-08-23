import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  quoted = new Quote(0,"","","","",new Date(),0,0);
  





  addQuote(){
    


    this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }
  

  

  constructor() { }

  ngOnInit(): void {
  }

}
