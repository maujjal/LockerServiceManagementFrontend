import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Commont URL For Every Page
   API_URL = 'http://localhost:8888/api/LSM';

  constructor(private http : HttpClient) { }

  //  Brand Info API

  CreateBrandInfo(data:any){
    return this.http.post<any>(this.API_URL+'/AddBrandInfo', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByBrandInfoId(id : any){
    return this.http.get(this.API_URL+'/BrandInfo/id'+id);   
  }

  UpdateBrandInfo(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/BrandInfo/id',data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetBrandInfos(){
    return this.http.get(this.API_URL+'/GetBrandInfos');   
  }

  //  Vendor Info API

  CreateVendorInfo(data:any){
    return this.http.post<any>(this.API_URL+'/AddVendor', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByVendorInfoId(id : any){
    return this.http.get(this.API_URL+'/Vendor/id'+id);   
  }

  UpdateVendorInfo(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/Vendor/id',data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetVendorInfos(){
    return this.http.get(this.API_URL+'/GetVendors');   
  }

  //  Locker Specification Info API

  CreateLockerSpecification(data:any){
    return this.http.post<any>(this.API_URL+'/AddLockerSpecification', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByLockerSpecificationId(id : any){
    return this.http.get(this.API_URL+'/LockerSpecification/id'+id);   
  }

  UpdateLockerSpecification(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/LockerSpecification/id',data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

//  Drawer Allocate API

    CreateDrawerAllocate(data:any){
      return this.http.post<any>(this.API_URL+'/AddDrawerAllocate', data)
        .pipe(map((res:any)=> {
          return res;
        }))
    }

    GetByDrawerAllocateId(id : any){
      return this.http.get(this.API_URL+'/DrawerAllocate/id'+id);   
    }

    UpdateDrawerAllocate(id : any, data : any){
      return this.http.put<any>(this.API_URL+'/DrawerAllocate/id',data)
      .pipe(map((res:any)=> {
        return res;
      }))
    }

}

