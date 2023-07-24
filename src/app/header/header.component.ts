import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output('selected') selected: EventEmitter<string> = new EventEmitter<string>();

  open(tab: string) {
    this.selected.emit(tab);
    console.log("Tab clicked!")
  }
}
