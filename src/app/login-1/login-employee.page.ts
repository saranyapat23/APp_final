import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.page.html',
  styleUrls: ['./login-employee.page.scss'],
})
export class LoginEmployeePage implements OnInit {

  constructor(private navCtrl : NavController,private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  goToDay(){
    this.navCtrl.navigateForward('/day')
  }

  uid: string='';
  password: string= '';

  async onSubmit() {
    const correctPassword = '123456';
    const correctUid = '123'


    if (this.password === correctPassword && this.uid === correctUid) {
      // ถ้ารหัสผ่านถูกต้อง นำไปยังหน้าอื่น
      this.router.navigate(['../day']);
    } else {
      // ถ้ารหัสผ่านไม่ถูกต้อง แสดงการแจ้งเตือน
      const alert = await this.alertController.create({
        header: 'ไม่ถูกต้อง',
        message: 'รหัสผ่าน หรือ UserName ของคุณไม่ถูกต้อง โปรดลองใหม่อีกครั้ง.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }


}
