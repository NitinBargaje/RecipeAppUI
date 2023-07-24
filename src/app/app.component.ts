import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shop';
  selected: string = 'recipe';

  updateSelection(selected: string) {
    this.selected = selected;
  }
}
