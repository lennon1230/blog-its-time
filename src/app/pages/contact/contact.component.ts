import { Component } from '@angular/core';
import { SocialMediaComponent } from '../../footer/social-media/social-media.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
