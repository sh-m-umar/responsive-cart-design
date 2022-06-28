import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    {
      id: '#8078042',
      name: '3D Art',
      user: 'Elias.Manik',
      views: 645,
      followers: 54,
      date: '22-june-2022',
      price: 10.5,
      usd: 5500.9,
      taxes: -20,
      subTotal: 5500.0,
      total: 5500.9,
      image: 'https://bit.ly/3A6Y9lO',
    },
    {
      id: '#8078042',
      name: '3D Art',
      user: 'Elias.Manik',
      views: 645,
      followers: 54,
      date: '22-june-2022',
      price: 10.5,
      usd: 5500.9,
      taxes: -20,
      subTotal: 5500.0,
      total: 5500.9,
      image: 'https://bit.ly/3A6Y9lO',
    },
    {
      id: '#8078042',
      name: '3D Art',
      user: 'Elias.Manik',
      views: 645,
      followers: 54,
      date: '22-june-2022',
      price: 10.5,
      usd: 5500.9,
      taxes: -20,
      subTotal: 5500.0,
      total: 5500.9,
      image: 'https://bit.ly/3A6Y9lO',
    },
    {
      id: '#8078042',
      name: '3D Art',
      user: 'Elias.Manik',
      views: 645,
      followers: 54,
      date: '22-june-2022',
      price: 10.5,
      usd: 5500.9,
      taxes: -20,
      subTotal: 5500.0,
      total: 5500.9,
      image: 'https://bit.ly/3A6Y9lO',
    },
  ];

  total = {
    items: 40.2,
    usd: 10500.9,
    taxes: -20,
    subTotal: 5500.0,
    total: 5500.9,
  };

  constructor() {}

  ngOnInit(): void {}
}
