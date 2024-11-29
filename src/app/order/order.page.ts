import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private navCtrl: NavController , private router: Router) { }

  ngOnInit() {
  }

    goToMenuorder(){
      this.navCtrl.navigateForward('/orderlist')
    }
  products =[
    {
      id : 1,
      name:'คุณ : วชิรวิทย์ อุตตมากร',
      detail:'เบอร์โทร : 0955531319 ',
      room:'เลขที่ห้อง : 2104'
    },
  ];

 

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
        this.products =[];
      },
    },
  ];
public exitButtons = [
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
    this.router.navigate(['/home'])
    },
  },
];

}
