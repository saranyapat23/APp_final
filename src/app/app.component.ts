import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController) {}

  goToHome(){
    this.navCtrl.navigateForward('/menu-1')
  }

  goToCart(){
    this.navCtrl.navigateForward('/menu-2')
  }
}
