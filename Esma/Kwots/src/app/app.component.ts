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

  startDate() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
  }


  checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }

  startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = "";
    m = this.checkTime(m);

    if (h > 12) {
      h = h - 12;
      ampm = " PM";
    } else if (h == 12) {
      h = 12;
      ampm = " AM";
    } else if (h < 12) {
      ampm = " AM";
    } else {
      ampm = "PM";
    };

    if (h == 0) {
      h = 12;
    }

    document.getElementById('display').innerHTML = h + ":" + m + ampm;
    var t = setTimeout(() => { this.startTime() }, 500);
  }

}




