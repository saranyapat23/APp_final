import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu-3',
  templateUrl: './menu-3.page.html',
  styleUrls: ['./menu-3.page.scss'],
})
export class Menu3Page implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goToWaitfood(){
    this.navCtrl.navigateBack('/waitfood')
  }

}
