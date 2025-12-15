import { Component } from '@angular/core';

import { Header } from '../../shared-component/header/header';

@Component({
  selector: 'app-pro',
  standalone: true,
  imports: [Header],
  templateUrl: './pro.html',
  styleUrl: './pro.scss',
})
export class Pro {
  plans = [
    {
      title: 'Pro Individual',
      price: '₹99',
      features: ['Ad-free Music', 'Unlimited Downloads', 'Unlimited JioTunes'],
    },
    { title: 'JioTunes+', price: '₹249', features: ['Unlimited JioTunes options'] },
    { title: 'Pro Student', price: '₹49', features: ['Ad-free Music', 'Unlimited Downloads'] },
  ];
}
