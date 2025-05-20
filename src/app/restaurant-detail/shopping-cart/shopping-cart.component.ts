import { Component, OnInit } from '@angular/core';

import {ShoppingCartService} from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  items(): any[]{
    return this.shoppingCartService.items
  }

  remove(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  clear(){
    this.shoppingCartService.clear()
  }

  total(): number{
    return this.shoppingCartService.total()
  }

}
