import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topBannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay: true
  }

  flashSaleOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay: true
  }

  flashBannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: false,
    autoplay: true
  }

  flashCard: any[] = [
    {
      name: 'Black Table Lamp',
      sellPrice: 7.99,
      realPrice: 15,
      picture: 'assets/img/product/2.png'
    },
    {
      name: 'Modern Sofa',
      sellPrice: 14,
      realPrice: 21,
      picture: 'assets/img/product/2.png'
    },
    {
      name: 'Classic Garden Chair',
      sellPrice: 36,
      realPrice: 495,
      picture: 'assets/img/product/2.png'
    },
    {
      name: 'Black Table Lamp',
      sellPrice: 7.99,
      realPrice: 15,
      picture: 'assets/img/product/2.png'
    },
    {
      name: 'Modern Sofa',
      sellPrice: 14,
      realPrice: 21,
      picture: 'assets/img/product/2.png'
    },
    {
      name: 'Classic Garden Chair',
      sellPrice: 36,
      realPrice: 495,
      picture: 'assets/img/product/2.png'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
