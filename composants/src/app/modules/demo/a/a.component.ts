import { Component } from '@angular/core';

// Module Demo > Component A 
@Component({
  selector: 'demo-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  data: string = "The Data !!";
}
