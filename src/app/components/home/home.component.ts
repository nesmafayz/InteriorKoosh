import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {

    const video = this.heroVideo.nativeElement;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(error => {
      console.error("Autoplay failed:", error);
    });
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

