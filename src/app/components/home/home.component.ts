import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      strings: ['<span style="color: #cd9c20;">LOVE</span> WHERE YOU LIVE'],
      typeSpeed: 120,
      backSpeed: 25,
      loop: true,
      showCursor: false
    };
    new Typed('.typed-text', options);
  }

}
