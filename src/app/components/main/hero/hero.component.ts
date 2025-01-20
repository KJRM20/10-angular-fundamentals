import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  ngAfterViewInit(): void {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.muted = true; 
      video.play().catch(error => {
        console.error('Error playing video automatically:', error);
      });
    }
  }
}
