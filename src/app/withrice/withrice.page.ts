import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-withrice',
  templateUrl: './withrice.page.html',
  styleUrls: ['./withrice.page.scss'],
})
export class WithricePage implements OnInit {

  constructor(private router: Router, private navCtrl : NavController) { }

  ngOnInit() {
  }

  goBacktoMenu(){
    this.navCtrl.navigateBack('/menu-1')
  }

  public alertButtons = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'ยืนยัน',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/menu-1'])
      },
    },
  ];

  products =[
    {
      id : 1,
      name:'กะเพราเครื่องใน',
      price: 35,
      detail:'Stir-Fired Bassil with Pork Offal',
      imageURL : '/assets/imageForApp/inchiken.jpg'
    },
    {
      id : 2,
      name:'พะโล้',
      price: 35,
      detail:'Stewed Pork with Eggs (Pa-Lo)',
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
    },


  ]

}
