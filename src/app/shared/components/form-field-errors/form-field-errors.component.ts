import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";


@Component({
  selector: 'form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent {
  @Input() formField: AbstractControl;
  @Input() validValue: number | string

}
