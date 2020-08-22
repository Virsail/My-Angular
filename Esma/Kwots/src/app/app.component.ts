import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kwots';

  name = 'Angular';
  randomNumber;

  ngOnInit() {
    this.startDate();
    this.startTime();
  }
}


