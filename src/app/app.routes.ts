import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {'path': '', 'title': 'Home', component:IndexComponent},
    {'path': 'home', 'title': 'Home', component:IndexComponent},
    {'path': 'about', 'title': 'About', component:AboutComponent},
    {'path': 'service', 'title': 'Services', component:ActivityComponent},
    {"path": 'contact', 'title': 'Contact', component:ContactComponent},
    {'path': 'terms-of-use', 'title': 'Terms of Use', component:TermsComponent},
    {'path': 'privacy-policy', 'title': 'Privacy Policy', component:PrivacyComponent},
    {'path': 'blog', 'title': 'Blog', component:BlogComponent},
    {'path': '**', 'title': 'Page Not Found', component:PageNotFoundComponent},
];
