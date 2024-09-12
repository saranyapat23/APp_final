import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
        this.router.navigate(['/order'])
      },
    },
  ];

}
