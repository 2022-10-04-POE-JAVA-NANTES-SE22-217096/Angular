import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Titre de mon application';

  public url:string = "https://picsum.photos/300/400";
  public text:string = "Lorem ipsum..."

  public sayHello()
  {
    alert("Hello There !");
  }

  public firstname: string = "Bob";
}
