import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor( public http:HttpClient ) { }

  data_detailCart: any=[];


  addMenu_Table(data:any){
    console.log("ข้อมูลส่งไปยัง api",data);
    return this.http.post('http://localhost/PJ_RRHOUSE/customer/insertMenu.php',data);
  }

  listMenu(){
    return this.http.get('http://localhost/PJ_RRHOUSE/customer/list_menu.php');
  }

  listcart(){
    return this.http.get('http://localhost/PJ_RRHOUSE/customer/list.cart.php');
  }
}
