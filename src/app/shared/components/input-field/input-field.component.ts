// * Angular
import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
// * Services
import { FormService } from '@core/services/forms.service';
import { LocalStorageService } from '@core/services/localstorage.service';

@Component({
  selector: 'input-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => InputFieldComponent),
      multi:true
    }
  ]
})
export class InputFieldComponent {
  // * Submitted
  @Input() Submitted!:boolean; 
  // * InvalidPassword Validation
  @Input() ValidationMessage?:string; 
  // * Legend
  @Input() legend:string = '';
  // * Disabled
  @Input() isDisabled:boolean = false;
  // * Input Type
  @Input() inputType:string = 'text';
  // * Icon eye
  @Input() iconEye:boolean = false;
  // * Icon Txt
  @Input() iconTxt:string = '';
  // * Icon Main
  @Input() mainIconSrc:string = '';
  onTouchCb?: () => void;
  // * Field Value
  fieldValue:any = '';
  private onChangeCb?: Function;
  public formService = inject( FormService );
  public localService = inject( LocalStorageService );

  // * Change Input Type | password
  changeTypePassword():string {
    if(this.inputType === 'text') {
    return this.inputType = 'password';
    } else {
    return this.inputType = 'text';
    }
  }
  // * Change Text Value
  changeText($event: any) {
    this.onChangeCb?.($event.target.value);
  }

  writeValue(value: any): void {
    this.fieldValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    fn = this.onTouchCb;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled = this.isDisabled;
  }


}
