import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards = [
    {
      svg : '<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="photo-film-music" class="svg-inline--fa fa-photo-film-music " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M160 96H64C28.7 96 0 124.7 0 160V384c0 35.3 28.7 64 64 64H289.9c4.4-18.2 15.9-33.1 29.6-43.4c6.8-5.1 14.5-9.4 22.6-12.6H192c-17.7 0-32-14.3-32-32V96zM56 168c0-8.8 7.2-16 16-16H88c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H72c-8.8 0-16-7.2-16-16V168zm16 80H88c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H72c-8.8 0-16-7.2-16-16V264c0-8.8 7.2-16 16-16zM56 360c0-8.8 7.2-16 16-16H88c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H72c-8.8 0-16-7.2-16-16V360zM640 184c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-192 64c-9.8 3.3-16.4 12.4-16.4 22.8v48V417.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48V313.3l144-48v88.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.5-.1-3-.3-4.4c.2-1.2 .3-2.4 .3-3.6V232 184zM461.6 103.5c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5L388 177.9l-15.3-19.7c-3-3.9-7.7-6.2-12.6-6.2s-9.6 2.3-12.6 6.2l-56 72c-3.8 4.8-4.4 11.4-1.7 16.9s8.3 9 14.4 9h64v-7.9c0-24.1 15.4-45.5 38.3-53.1l93.1-31-37.8-60.5z"></path><path class="fa-primary" fill="currentColor" d="M192 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64v69.6c-12.9-6.1-27.9-7.1-41.7-2.5l-98.9 33-37.8-60.5c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5L388 177.9l-15.3-19.7c-3-3.9-7.7-6.2-12.6-6.2s-9.6 2.3-12.6 6.2l-56 72c-3.8 4.8-4.4 11.4-1.7 16.9s8.3 9 14.4 9h64v64H256c-35.3 0-64-28.7-64-64V64zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></g></svg>',
      title : 'Integrations',
      description : 'Use Gamma with your favorite tools. Embed rich media, including images, videos, and entire websites.',
      url: {
        text : 'Explore integrations',
        href : '#'
      }
    },
    {
      svg : '<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="lightbulb" class="svg-inline--fa fa-lightbulb " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M321.2 297.8c-19.8 27.1-39.7 54.4-49.2 86.2H112c-9.6-31.9-29.5-59.1-49.2-86.2c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4zM112 176c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16C130.1 64 80 114.1 80 176c0 8.8 7.2 16 16 16s16-7.2 16-16z"></path><path class="fa-primary" fill="currentColor" d="M192 512c44.2 0 80-35.8 80-80V384H112v48c0 44.2 35.8 80 80 80z"></path></g></svg>',
      title : 'Gamma Insights',
      description : 'Insights from the minds behind Gamma on how to put your best work forward.',
      url: {
        text : 'Read the latest',
        href : '#'
      }
    },
    {
      svg : '<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="file-powerpoint" class="svg-inline--fa fa-file-powerpoint " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM136 240c-13.3 0-24 10.7-24 24V368v56c0 13.3 10.7 24 24 24s24-10.7 24-24V392h44c42 0 76-34 76-76s-34-76-76-76H136zm68 104H160V288h44c15.5 0 28 12.5 28 28s-12.5 28-28 28z"></path><path class="fa-primary" fill="currentColor" d="M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM136 240c-13.3 0-24 10.7-24 24V368v56c0 13.3 10.7 24 24 24s24-10.7 24-24V392h44c42 0 76-34 76-76s-34-76-76-76H136zm68 104H160V288h44c15.5 0 28 12.5 28 28s-12.5 28-28 28z"></path></g></svg>',
      title : 'AI PowerPoint',
      description : 'Create presentations in Gamma and export to PowerPoint in one click.',
      url: {
        text : 'Read about AI PowerPoints',
        href : '#'
      }
    },
    {
      svg : '<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="layer-group" class="svg-inline--fa fa-layer-group " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M324.9 279.8l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path><path class="fa-primary" fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 337.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2z"></path></g></svg>',
      title : 'Presentation templates',
      description : 'Customize one of our ready-made templates, or look for inspiration.',
      url: {
        text : 'Browse templates',
        href : '#'
      }
    }
  ]

}
