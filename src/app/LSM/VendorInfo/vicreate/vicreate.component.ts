import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { VendorModel } from './vicreate.component.model';

@Component({
  selector: 'app-vicreate',
  templateUrl: './vicreate.component.html',
  styleUrls: ['./vicreate.component.css']
})
export class VICreateComponent implements OnInit {

  VendorModeloObj: VendorModel = new VendorModel();

  formValue !: FormGroup

  showMe : boolean=false

  constructor(private formBuilder : FormBuilder, private Api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      ventit:[''],
      vencod:[''],
      vencountry:[''],
      status:[''],
      remarks:[''],
      oprstamp:[''],
      oprtimstamp:[''],
      updstamp:[''],
      updtimstamp:[''],
      address3:[''],
      address2:[''],
      address1:[''],
      phone:[''],
      responseMessage:[''],
    });
  }

  CreateVendor(){
    
    this.VendorModeloObj.vencod=this.formValue.value.vencod;
    this.VendorModeloObj.ventit=this.formValue.value.ventit;

    this.VendorModeloObj.vencountry=this.formValue.value.vencountry;
    this.VendorModeloObj.phone=this.formValue.value.phone; 
    this.VendorModeloObj.remarks=this.formValue.value.remarks;   
    this.VendorModeloObj.address1=this.formValue.value.address1;   
    this.VendorModeloObj.address2=this.formValue.value.address2;   
    this.VendorModeloObj.address3=this.formValue.value.address3;  

    this.Api.CreateVendorInfo(this.VendorModeloObj)
    .subscribe(res =>{
      console.log(res)
      alert(res.responseMessage);
      this.formValue.reset();
    },
    err=>{
      alert("Something Wrong");
    })
  }

  ClearPage(){
    this.formValue.reset();
  }

}
