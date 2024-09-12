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
      detail:'Pad Kra Pao Offal',
    },
    {
      id : 2,
      name:'พะโล้',
      price: 35,
      detail:'Pork Stewed',
    },{
      id : 3,
      name:'แกงเขียวหวานไก่',
      price: 35,
      detail:'Thai Green Curry',
    },{
      id : 4,
      name:'ผัดกะหล่ำปลี',
      price: 35,
      detail:'Stir-fried Cabbage',
    },{
      id : 5,
      name:'กะเพาไก่สับ',
      price: 35,
      detail:'Minced Chicken Kra Pao',
    },{
      id : 6,
      name:'ผัดพริกแกงผักบุ้ง',
      price: 35,
      detail:'Stir-fried Water Spinach',
    },{
      id : 7,
      name:'ผัดกวางตุ้งใต้หวัน',
      price: 35,
      detail:'Stir-fried Cantonese',
    },{
      id : 8,
      name:'ผัดไก่พริกแกงใต้',
      price: 35,
      detail:'Stir-fried Chicken with Southern Curry Paste',
    },{
      id : 9,
      name:'ไข่ดาว',
      price: 10,
      detail:'fried egg',
    },



  ]

}
