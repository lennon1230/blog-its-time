import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, MenubarComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  btnMenuCondition :boolean = true;
  classHidden :boolean = false;

  btnMenu(){
    this.btnMenuCondition = !this.btnMenuCondition;
    this.classHidden = !this.classHidden;
  }

}
