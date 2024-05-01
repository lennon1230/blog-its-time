import { Component } from '@angular/core';
import { BigCardComponent } from './big-card/big-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BigCardComponent, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  paginator :number = 5;
  classBtnHidden :boolean = false;

  pagination(){
    if(this.paginator < 10)
      this.paginator += 5;
    else{
      this.paginator += 5;
      this.classBtnHidden = true;
    }
  }

}
