import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lscreate',
  templateUrl: './lscreate.component.html',
  styleUrls: ['./lscreate.component.css']
})
export class LSCreateComponent implements OnInit {

  formValue !: FormGroup
  
  constructor() { }

  ngOnInit(): void {
  }

  ClearPage(){
    this.formValue.reset();
  }
}
