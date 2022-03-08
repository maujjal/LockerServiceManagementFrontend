import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
}
