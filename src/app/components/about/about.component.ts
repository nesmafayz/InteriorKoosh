import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


// Data for Team Members
teamMembers = [
  { name: 'John Doe', role: 'Lead Designer', image: '../../../assets/images/image00010 1.jpg' },
  { name: 'Jane Smith', role: 'Project Manager', image: '../../../assets/images/images.jpg' },  { name: 'John Doe', role: 'Lead Designer', image: '../../../assets/images/image00010 1.jpg' },
  { name: 'Jane Smith', role: 'Project Manager', image: '../../../assets/images/images.jpg' },
  { name: 'John Doe', role: 'Lead Designer', image: '../../../assets/images/image00010 1.jpg' },
  { name: 'Jane Smith', role: 'Project Manager', image: '../../../assets/images/images.jpg' },

];

// Data for Material Swatches (Colors & Materials)
swatches = [
  { name: 'Marble White', color: '#f0f0f0' },
  { name: 'Lux Gold', color: '#bfa25d' },
  { name: 'Midnight Black', color: '#000000' },
  { name: 'Deep Emerald', color: '#006b3f' }
];

// Data for Testimonials (Client Reviews)
testimonials = [
  {
    quote: "A seamless experience that transformed our space!",
    author: "John Doe"
  },
  {
    quote: "True professionals who exceeded expectations.",
    author: "Sarah Lee"
  },
  {
    quote: "Luxury and elegance embodied in every detail.",
    author: "James Wong"
  }
];

// Data for Timeline of the Company
timeline = [
  { year: '2000', event: 'Founded with a vision to redefine luxury.' },
  { year: '2010', event: 'Expanded our services internationally.' },
  { year: '2020', event: 'Won the Luxury Design Award for excellence.' }
];

constructor() { }

ngOnInit(): void {
  // Additional initialization logic can go here if needed
}
}