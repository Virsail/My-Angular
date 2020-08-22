import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class AppComponent {
  name = 'Angular';
   randomNumber;

  ngOnInit() {
    this.startDate();
    this.startTime();
  }

  // https://twitter.com/share?text=${quote} - Donald Trump`
  tweet() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.quotes[this.randomNumber]);
  }

  quotes = [
    'The Way Get Started Is To Quit Talking And Begin Doing. -Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Opportunity',
    "Don\'t Let Yesterday Take Up Too Much Of Today. -Will Rogers",
    'You Learn More From Failure Than From Success. Don\'t Let It Stop You',
    'Itl\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.- Vince Lombardi',
    'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed',
    'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. Rob',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. - Og Mandir',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk.',
    "We May Encounter Many Defeats But We Must Not Be Defeated.- Maya Angelou",
    "failure is success if we learn from it",
    'Setting small targets is much better than setting huge goals that you cannot achieve. Remember that "small drops of water make the mighty ocean',
    'To shine like a sun you need to Burn like that.',
    'Instead of managing your time, think of managing your energy or attention.',
    'small steps can bring big challenges',
    'learn quickly from mistakes is the success',
    'Success comes from hard work and dedication.',
    'Time + patience + effort=success',
    "Humility is the true key to success",
    'Believe in yourself',
    'Break the rules',
    'Don\'t afraid to fail',
    'Never listen to the naysayers',
    'choose one word to stay active daily',
    'One life one decision',
    'Ab Kisi cheez se bhagna nhi hai',
    'One man army',
    'Bad decisions make good memories',
    'don\'t change the goal change the strategy',
    'every person has a role to play',
    'its wealth if  you make someone laugh',
    'you must have one power that no one has it must be irreplaceable.',
    'you don\'t have the idea what is possible',
    'act quickly',
    'the idea is only to do good, better, best work',
    'rise and grind',
    'Assets put money in your pocket  liabilities take money out of pocket'
  ]
 
  getNewQuote() {
    const quoteText = document.querySelector('.quote-text');
    this.randomNumber = Math.floor(Math.random() * (this.quotes.length));
    quoteText.textContent = this.quotes[this.randomNumber];
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

