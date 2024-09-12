import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  goToOrder(){
    this.navCtrl.navigateBack('/order')
  }

  customer =[
    {
      id : 1,
      name:'คุณ : วชิรวิทย์ อุตตมากร',
      detail:'เบอร์โทร : 0955531319 ',
      room:'เลขที่ห้อง : 2104'
    },

  ]

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
    }
  ]

}
