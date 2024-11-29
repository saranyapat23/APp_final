import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceCartPage } from './../service-cart/service-cart.page';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-menu-1',
  templateUrl: './menu-1.page.html',
  styleUrls: ['./menu-1.page.scss'],
})
export class Menu1Page implements OnInit {

  menu:any =[];












  dataMenu_Table:any = []

    txtmenu_id:any;
    txtname_menu:any;
    txtprice:any;

    menu_id:any;
    name_menu:any;
    price:any;

  presentingElement : any;


  constructor(private navCtrl: NavController, private servicecartpage: ServiceCartPage, private actionSheetCtrl: ActionSheetController, public modalController: ModalController , private router: Router,
    public dataapi: DataapiService
  ) {
    this.loadDataMenu();
  }

  addMenu_Table(){
    let data ={
      menu_id:this.txtmenu_id,
      name_menu:this.txtname_menu,
      price:this.price
    }

    this.dataapi.addMenu_Table(data).subscribe({
      next: (res: any) =>{
        console.log("ข้อมูลถูกเพิ่ม",res);
      },error:(error: any) =>{
        console.log("ไม่สามารถเพิ่มได้",error);
      }

    });
    this.clearForm();
  }

  clearForm(){
    this.txtmenu_id='',
    this.txtname_menu='',
    this.price=''
  }
  showdata(){
    this.router.navigate(['/menu-2']);
  }



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
    this.presentingElement = document.querySelector('.ion-page'), this.loadDataMenu() ;
  }

  loadDataMenu(){
    this.dataapi.listMenu().subscribe({
      next: (res: any) =>{
        console.log('successfully');
        this.menu = res;
      },
      error:(error: any)=>{
        console.log('Error',error);
      }
    });
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



  /**  menuList = [
    { menu_id: 101, name_menu: 'กะเพราเครื่องใน', price: 35 },
    { menu_id: 102, name_menu: 'เมนูแกงเขียวหวานไก่', price: 40 },
    { menu_id: 3, name_menu: 'แกงเขียวหวาน', price: 45 },
  ]; -->*/



  products =[
    {
      menu_id : 101,
      name_menu:'กะเพราเครื่องใน',
      price: 35,
      detail:'Stir-Fired Bassil with Pork Offal',
      imageURL : '/assets/imageForApp/inchiken.jpg',
      value : 'กะเพราเครื่องใน'
    },
    {
      menu_id : 102,
      name_menu:'พะโล้',
      price: 35,
      detail:'Stewed Pork with Eggs (Pa-Lo)',
      imageURL : '/assets/imageForApp/พะโล้.jpg'
    },{
      menu_id : 3,
      name_menu:'แกงเขียวหวานไก่',
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
      name:'กะเพราไก่สับ',
      price: 35,
      detail:'Stir-fired Minced Chicken with Thai Bassil',
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
      detail:'Stir-Fried Taiwanese Bok Choy',
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
      detail:'Fried Egg',
      imageURL : '/assets/imageForApp/ไข่ดาว.jpg'
    }



  ]

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


}
