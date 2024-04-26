import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    IndexComponent,
    AboutComponent,
    ActivityComponent,
    ContactComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-its-time';
}
