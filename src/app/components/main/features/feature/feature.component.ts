import { Component, input } from '@angular/core';
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-feature',
  imports: [TestimonialComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  public tagline = input<string>();
  public title = input<string>();
  public content = input<string>();
  public points = input<{icon: string; text: string}[]>();
  public testimonial = input<{text: string; author: string; place: string, image: string}>();
  public videos = input<{src: string; type: string}[]>();

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
