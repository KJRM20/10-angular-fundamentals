import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  clicked = output<string>();

  onclick(): void{
    console.log("Try button was pressed.");
  }

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
