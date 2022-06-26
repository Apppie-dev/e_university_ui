import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'element-university-logo',
  templateUrl: './element-university-logo.component.html',
  styleUrls: ['./element-university-logo.component.scss']
})
export class ElementUniversityLogoComponent implements OnInit {
  @Input() size = 'medium';

  constructor() { }

  ngOnInit(): void {
  }

}
