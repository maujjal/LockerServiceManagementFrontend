import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dlcreate',
  templateUrl: './dlcreate.component.html',
  styleUrls: ['./dlcreate.component.css']
})
export class DLCreateComponent implements OnInit {

  formValue !: FormGroup

  showMe : boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(event : any){
    this.showMe =! this.showMe
  }

  close() {
    this.showMe=! this.showMe
  }

  ClearPage(){
    this.formValue.reset();
  }

}
