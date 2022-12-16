import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public counter: number = 0;
  
  public more(): void
  {
    this.counter++;
  }

  public less(): void
  {
    this.counter--;
  }

}
