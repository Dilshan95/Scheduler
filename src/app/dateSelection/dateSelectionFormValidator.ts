import { AbstractControl, ValidationErrors } from '@angular/forms';


export class dateSelectionFormValidators{
    
    // static _idValidator(control:AbstractControl) : ValidationErrors |null{
    //     if(!(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(control.value))){
    //         return {_idInvalid:true};
    //     }
    //     return null;
    // }
    static PassengersValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[1-9]?[0-9]{1}$|^100$/.test(control.value))){
            return {FromInvalid:true};
        }
        return null;
    }
    static PhoneNumberValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^7|0|(?:\+94)[0-9]{9,10}$/.test(control.value))){
            return {PhoneNumberInvalid:true};
        }
        return null;
    }

    
    static NameValidator(control:AbstractControl) : ValidationErrors |null{
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(control.value))){
            return {FromInvalid:true};
        }
        return null;
    }
    // static vehicleNoValidator(control:AbstractControl) : ValidationErrors |null{
    //     if(!((/^([A-Za-z]{2})([-]{1})([A-Za-z]{2})([-]{1})(\d{4})$/.test(control.value))||( /^([A-Za-z]{2})([-]{1})([A-Za-z]{3})([-]{1})(\d{4})$/.test(control.value)))){
    //         return {vehicleNoInvalid:true};
    //     }
    //     return null;
    // }
    

    
}