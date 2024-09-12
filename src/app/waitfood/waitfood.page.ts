import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-waitfood',
  templateUrl: './waitfood.page.html',
  styleUrls: ['./waitfood.page.scss'],
})
export class WaitfoodPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goToMenu(){
    this.navCtrl.navigateBack('/menu-1')
  }

}
