import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceCartPage } from '../service-cart/service-cart.page';
import { AlertController } from '@ionic/angular';
import { Menu1Page } from '../menu-1/menu-1.page';
import { DataapiService } from '../dataapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-2',
  templateUrl: './menu-2.page.html',
  styleUrls: ['./menu-2.page.scss'],
})
export class Menu2Page implements OnInit {

  cart: any=[];

  cartItems = [];

  constructor(private navCtrl: NavController, private servicecartpage: ServiceCartPage , private alertController: AlertController, private http:HttpClient,
    public dataapi:DataapiService,
  ) {
    this.loadDataCart();
  }

  ngOnInit() {
    this.cartItems = this.servicecartpage.getCartItems();
    this.loadDataCart();
  }

  loadDataCart(){
    this.dataapi.listcart().subscribe({
      next: (res: any) => {
        console.log('เสร็จสิ้น');
        this.cart = res;
      },
      error: (error: any) => {
        console.log('error',error);
      }
    });
  }



  goToHome(){
    this.navCtrl.navigateBack('/menu-1')
  }

  goToLogin() {
    this.navCtrl.navigateForward('/menu-3')
  }
  goToWait() {
    this.navCtrl.navigateForward('/waitfood')
  }

  /**async deleteItem(index: number) {
    const alert = await this.alertController.create({
      header: 'ลบสินค้าจากตะกร้า',
      message: 'ยืนยันที่จะลบสินค้าหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            // ลบสินค้าจากรายการ
            this.item.splice(index, 1);
            console.log('Item deleted');
          }
        }
      ]
    });

    await alert.present();
  }*/

 /**  item =[
    {
      id : 1,
      name:'กะเพราเครื่องใน',
      price: 35,
      detail:'Pad Kra Pao Offal',
      imageURL : '/assets/imageForApp/inchiken.jpg'
    },
    {
      id : 2,
      name:'พะโล้',
      price: 35,
      detail:'Pork Stewed',
      imageURL : '/assets/imageForApp/พะโล้.jpg'
    },{
      id : 3,
      name:'แกงเขียวหวานไก่',
      price: 35,
      detail:'Thai Green Curry',
      imageURL : '/assets/imageForApp/greencurry.jpg'
    },{
      id : 4,
      name:'ผัดกะหล่ำปลี',
      price: 35,
      detail:'Stir-fried Cabbage',
      imageURL : '/assets/imageForApp/กะหล่ำ.jpg'
    },
  ]*/





}
