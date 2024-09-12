import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Menu1Page } from './../menu-1/menu-1.page';
import { Menu2Page } from './../menu-2/menu-2.page';

@Component({
  selector: 'app-service-cart',
  templateUrl: './service-cart.page.html',
  styleUrls: ['./service-cart.page.scss'],
})


@Injectable({
  providedIn: 'root' })

export class ServiceCartPage implements OnInit {

  private cartItems : any;

  constructor() { }

  ngOnInit() {
  }


   // ฟังก์ชันสำหรับเพิ่มสินค้าไปยังตะกร้า
   addToCart(products: any) {
    this.cartItems.push(products);
  }

  // ฟังก์ชันสำหรับดึงรายการสินค้าในตะกร้า
  getCartItems() {
    return this.cartItems;
  }

  // ฟังก์ชันสำหรับลบสินค้าออกจากตะกร้า
  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter((item: { id: any; }) => item.id !== product.id);
  }

  // ฟังก์ชันสำหรับเคลียร์ตะกร้า
  clearCart() {
    this.cartItems = [];
  }
}
