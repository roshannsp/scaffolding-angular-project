import { Component, OnInit, Input } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() error: HttpErrorResponse

  constructor() {}

  ngOnInit(): void {}
}
