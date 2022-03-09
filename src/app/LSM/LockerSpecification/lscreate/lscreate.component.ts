import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { LockerSpecificationModel } from './lscreate.component.model';

@Component({
  selector: 'app-lscreate',
  templateUrl: './lscreate.component.html',
  styleUrls: ['./lscreate.component.css']
})
export class LSCreateComponent implements OnInit {

  LockerSpecificationModelobj: LockerSpecificationModel =new LockerSpecificationModel();

  formValue !: FormGroup;
  AllVendor : any;
  AllBrand : any;
  
  constructor(private formBuilder : FormBuilder, private Api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
    lckrid:[''],
    lckrcod:[''],
    lckrnam:[''],
    brandcod:[''],
    lckrdes:[''],
    vencod:[''],
    bokflg:[''],
    actflg:[''],
    appflg:[''],
    remarks:[''],
    numofdrwr:[''],
    appstamp:[''],
    apptimstamp:[''],
    updstamp:[''],
    updtimstamp:[''],
    oprstamp:[''],
    oprtimstamp:[''],
    ventit:[''],
    brdtit:[''],
      responseMessage:[''],
    });
    this.Api.GetBrandInfos()
    .subscribe(res =>{
      this.AllBrand=res;
    });
    this.Api.GetVendorInfos()
    .subscribe(res =>{
      this.AllVendor=res;
    });

  }
  CreateLockerSpecification(){
    
    this.LockerSpecificationModelobj.lckrid=this.formValue.value.lckrid;
    this.LockerSpecificationModelobj.lckrcod=this.formValue.value.lckrcod;

    this.LockerSpecificationModelobj.lckrnam=this.formValue.value.lckrnam;
    this.LockerSpecificationModelobj.numofdrwr=this.formValue.value.numofdrwr; 
    this.LockerSpecificationModelobj.remarks=this.formValue.value.remarks;   
    this.LockerSpecificationModelobj.lckrdes=this.formValue.value.lckrdes;   
    this.LockerSpecificationModelobj.brandcod=this.formValue.value.brandcod;   
    this.LockerSpecificationModelobj.vencod=this.formValue.value.vencod; 
    this.LockerSpecificationModelobj.oprstamp = 'system';

    console.log(this.LockerSpecificationModelobj)

    this.Api.CreateLockerSpecification(this.LockerSpecificationModelobj)
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
