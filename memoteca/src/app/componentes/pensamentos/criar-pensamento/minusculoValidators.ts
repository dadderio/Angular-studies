import { AbstractControl } from "@angular/forms";

export function minusculoValidators(control: AbstractControl){
    const autoria = control.value as string;
    if(autoria !== autoria?.toLocaleLowerCase()){
        return { minusculo: true};//[ 'minusculo' ]esse será o nome do erro no html
    }else
    return null;
}