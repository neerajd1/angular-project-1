import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  // template: `<h1>Hello Name</h1>
  //   <p>lorem</p> `,
  templateUrl: './app.component.html',
  //styles: [''],
  styleUrls: ['./app.component.css'], // this is array because an HTML template can have multiple stylesheet.
})
export class FirstComponent {
  title: String = 'Name';
}
