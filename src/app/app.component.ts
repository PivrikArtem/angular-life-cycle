import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Nick';
  count = 0;
  number = 1;

  changeInputValue(e) {
    this.name = e.target.value;
  }
}
