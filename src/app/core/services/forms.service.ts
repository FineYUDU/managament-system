import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class FormService {
    // * Email Pattern
    emailPattern:string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    constructor() {}

     // * Invalid Field
	public invalidField(formGroup:FormGroup, field?:string, formSubmit?:boolean):boolean {
        // If the field is not defined, consider it not invalid
        if(!field) {
            return false;
        }
        const formControl = formGroup.get(field);
        // If the form control does not exist in the FormGroup
        if(!formControl) {
            return false;
        }
        // If the form control is invalid and formSubmit is true, consider it invalid
        if ( formControl.invalid && formSubmit ) {
            return true;
        }
        // Otherwise, consider it not invalid
        return false;
    }
    // * Error message
	fieldMsn(formGroup:FormGroup, field:string):any {
        // If the field is not defined, consider it not invalid
        if(!field) {
            return '';
        }
        const formControl = formGroup.get(field);
        // If the form control does not exist in the FormGroup
        if(!formControl) {
            return '';
        }
		if(formControl.getError('required')) {
			return 'msn-error.required'
		} 
		else if(formControl.getError('minLength')) {
			return 'msn-error.minLenght'
		} 
        else if (formControl.getError('pattern')) {
			return 'msn-error.pattern'
		}
        else if (formControl.getError('notEqual')) {
			return 'msn-error.notEqual'
		}
        else {
            return 'msn-error.userError'
        }
	}

    // * Method equal fields
	public equalFields(field1:string, field2:string) {

		return ( formGroup:FormGroup ): ValidationErrors | null => {
	
		  const fieldValue1 = formGroup.get(field1)?.value;
		  const fieldValue2 = formGroup.get(field2)?.value;
	
		  if( fieldValue1 !== fieldValue2 ) {
			formGroup.get(field2)?.setErrors({ notEqual:true });
			return { notEqual: true }
		  }
	
		  formGroup.get(field2)?.setErrors(null);
	
		  return null;
	
		}
	
	}

}