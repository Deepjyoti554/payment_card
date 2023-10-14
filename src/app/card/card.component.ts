import { Component, Input } from '@angular/core';

interface description{
  name: string,
  isdisable: boolean
}

interface product{
  plan: string,
  price: string,
  desc: Array<description>
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @Input() plan: string = ""
  // @Input() price: string = ""
  @Input() planObj: product | undefined;
}
