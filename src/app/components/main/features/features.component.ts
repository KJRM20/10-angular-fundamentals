import { Component } from '@angular/core';
import { FeatureComponent } from "./feature/feature.component";

@Component({
  selector: 'app-features',
  imports: [FeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      tagline: "Start inspired—every time",
      title: "Create unlimited presentations, websites, and more—in seconds",
      content: "Everything you need to <strong>quickly create and refine content</strong> with advanced AI.",
      testimonial: {
        text: 'Gamma allows me to package up information <b>in ways I can\'t with slides</b>, while still creating good flow for my presentations.',
        author: 'Ann Marie',
        place: 'Director of Product at Koalafi',
        image: 'images/annmarie.jpg'
      },
      videos: [
        { src: 'images/ani1-734508c7.mp4', type: 'mp4' },
        { src: 'images/ani1-ceced283.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Get help whenever you need it",
      title: "Meet your AI-powered design partner",
      points: [
        {
          icon : "🤩",
          text : "Access <strong>best-in-class AI</strong> for text, images, and search"
        },
        {
          icon : "🎨",
          text : "Apply <strong>eye-catching, expert-level</strong> designs and layouts"
        },
        {
          icon : "🪄",
          text : "Quickly <strong>rewrite or autocomplete</strong> your content"
        },
      ],
      testimonial: {
        text: 'Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand. With Gamma, I can get things done <b>so much faster.</b>',
        author: 'John',
        place: 'Co-founder & CEO at Stotles',
        image: 'images/John-Witt.jpg'
      },
      videos: [
        { src: 'images/ani2-7cdf2339.mp4', type: 'mp4' },
        { src: 'images/ani2-f97dbe58.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Get help whenever you need it",
      title: "Meet your AI-powered design partner",
      points: [
        {
          icon : "🎥",
          text : "Engage with interactive <strong>galleries, videos, and embeds</strong>"
        },
        {
          icon : "📈",
          text : "Visualize data with stunning <strong>charts, diagrams, and tables</strong>"
        },
        {
          icon : "🖼️",
          text : "Jumpstart your projects with versatile <strong>pre-made templates</strong>"
        },
      ],
      testimonial: {
        text: 'Notion x Canva is the best way to think about Gamma. It\'s just <b>so nice to use</b>!',
        author: 'Matthias',
        place: 'Senior Strategy Consultant at ODALINE',
        image: 'images/Matthias.jpg'
      },
      videos: [
        { src: 'images/ani3-d29250d3.mp4', type: 'mp4' },
        { src: 'images/ani3-c248fed0.webm', type: 'webm' }
      ]
    }
  ]
}
