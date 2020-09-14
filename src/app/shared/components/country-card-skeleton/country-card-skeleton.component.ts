import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-country-card-skeleton',
  templateUrl: './country-card-skeleton.component.html',
  styleUrls: ['./country-card-skeleton.component.scss'],
})
export class CountryCardSkeletonComponent implements OnInit {
  @Input() loading: boolean
  @Input() amount: number
  skeletons: string[]

  constructor() {}

  ngOnInit(): void {
    this.skeletons = Array<string>(this.amount)
  }
}
