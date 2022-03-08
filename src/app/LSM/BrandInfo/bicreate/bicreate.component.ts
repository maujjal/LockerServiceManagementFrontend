import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { BrandModel } from './bicreate.component.model';

@Component({
  selector: 'app-bicreate',
  templateUrl: './bicreate.component.html',
  styleUrls: ['./bicreate.component.css']
})
export class BICreateComponent implements OnInit {

  BrandModeloObj: BrandModel = new BrandModel();

  formValue !: FormGroup

  showMe : boolean=false
  constructor(private formBuilder : FormBuilder, private Api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      brdcod:[''],
      brdtit:[''],
      brdcountry:[''],
      status:[''],
      remarks:[''],
      oprstamp:[''],
      oprtimstamp:[''],
      updstamp:[''],
      updtimstamp:[''],
    });
  }

  CreateBrand(){
    
    this.BrandModeloObj.brdcod=this.formValue.value.brdcod;
    this.BrandModeloObj.brdtit=this.formValue.value.brdtit;

    this.BrandModeloObj.brdcountry=this.formValue.value.brdcountry;
    this.BrandModeloObj.remarks=this.formValue.value.remarks;   

    this.Api.CreateBrandInfo(this.BrandModeloObj)
    .subscribe(res =>{
      console.log(res)
      alert("Add Successfully");
      this.formValue.reset();
    },
    err=>{
      alert("Something Wrong");
    })
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
