import { Component } from '@angular/core';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { LogoComponent } from '../navbar/logo/logo.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, MenuFooterComponent, SocialMediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
