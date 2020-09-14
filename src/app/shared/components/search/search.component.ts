import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onSearch: EventEmitter<string>
  constructor() {
    this.onSearch = new EventEmitter<string>()
  }

  onKeyUp(e: any) {
    this.onSearch.emit(e.target.value)
  }
}
