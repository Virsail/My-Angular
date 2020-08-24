import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'welcome to Esma quotes';
  quotes:Quote[] = [
    new Quote (1,'Virsail','Life','The hard days are what make you stronger.','Albert Einstein', new Date(2020,8,24),0,0),
    new Quote (2,'Mbagaya','Positivity','If you believe it work out , you see opportunities.','Max Frisch',new Date(2020,8,23),0,0),
    new Quote (3,'Mikey','Sucess','Keep your eyes on the stars,and your feet on the ground.','Libby Larsen',new Date(2020,8,22),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Confirm by pressing ok`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
