import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceCartPage } from './../service-cart/service-cart.page';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-1',
  templateUrl: './menu-1.page.html',
  styleUrls: ['./menu-1.page.scss'],
})
export class Menu1Page implements OnInit {

  presentingElement : any;


  constructor(private navCtrl: NavController, private servicecartpage: ServiceCartPage, private actionSheetCtrl: ActionSheetController, public modalController: ModalController , private router: Router) {}



  async confirmOrder() {
    // ที่นี่จะเป็นส่วนที่ทำการประมวลผลคำสั่งซื้อ เช่น ส่งข้อมูลไปยัง server
    // หลังจากประมวลผลเสร็จแล้ว ให้ปิด modal และกลับไปหน้าหลัก

    // ปิด modal
    await this.modalController.dismiss();

    // นำทางไปหน้าหลัก (สมมติว่า routerLink ของหน้าหลักคือ '/home')
    // คุณอาจต้องปรับ routerLink ให้ตรงกับโครงสร้างของแอปพลิเคชันของคุณ
    this.router.navigate(['/menu-1']);
  }

  async confirmCancle() {
    // ที่นี่จะเป็นส่วนที่ทำการประมวลผลคำสั่งซื้อ เช่น ส่งข้อมูลไปยัง server
    // หลังจากประมวลผลเสร็จแล้ว ให้ปิด modal และกลับไปหน้าหลัก

    // ปิด modal
    await this.modalController.dismiss();

    // นำทางไปหน้าหลัก (สมมติว่า routerLink ของหน้าหลักคือ '/home')
    // คุณอาจต้องปรับ routerLink ให้ตรงกับโครงสร้างของแอปพลิเคชันของคุณ
    this.router.navigate(['/menu-1']);
  }


  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page') ;
  }


  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'กลับสู่หน้าหลักหรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          role: 'confirm',
        },
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };



/*addToCart(products: any) {
    this.servicecartpage.addToCart(products);
    console.log('เพิ่มสินค้าไปยังตะกร้า:', products);
  }*/


  goToContact(){
    this.navCtrl.navigateForward('/menu-2')
  }

  backToHome(){
    this.navCtrl.navigateBack('/home')
  }
  goToWait(){
    this.navCtrl.navigateForward('/waitfood')
  }

  goToWithrice(){
    this.navCtrl.navigateForward('/withrice')
  }




  products =[
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
    },{
      id : 5,
      name:'กะเพาไก่สับ',
      price: 35,
      detail:'Minced Chicken Kra Pao',
      imageURL : '/assets/imageForApp/กะเพาไก่สับ.jpg'
    },{
      id : 6,
      name:'ผัดพริกแกงผักบุ้ง',
      price: 35,
      detail:'Stir-fried Water Spinach',
      imageURL : '/assets/imageForApp/พริกแกงผักบุ้ง.jpg'
    },{
      id : 7,
      name:'ผัดกวางตุ้งใต้หวัน',
      price: 35,
      detail:'Stir-fried Cantonese',
      imageURL : '/assets/imageForApp/กวางตุ้ง.jpg'
    },{
      id : 8,
      name:'ผัดไก่พริกแกงใต้',
      price: 35,
      detail:'Stir-fried Chicken with Southern Curry Paste',
      imageURL : '/assets/imageForApp/ไก่พริกแกง.jpg'
    },{
      id : 9,
      name:'ไข่ดาว',
      price: 10,
      detail:'fried egg',
      imageURL : '/assets/imageForApp/ไข่ดาว.jpg'
    },


  ]



}
