import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

const RADIO_CONTROL_ACCESSOR = {
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=> TeslaWheelsComponent),
    multi:true
}

@Component({
    selector: 'tesla-wheels',
    changeDetection:ChangeDetectionStrategy.OnPush,
    templateUrl: './tesla-wheels.component.html',
    styleUrls:['./tesla-wheels.component.scss'],
    providers:[RADIO_CONTROL_ACCESSOR]
})
export class TeslaWheelsComponent implements ControlValueAccessor{
    constructor() { }

    private onModelChange:Function;
    private onTouch:Function;
    private value:string;
    private focussed:string;

    private sizes:number[] = [19,21];


    registerOnChange(fn:Function) {
        this.onModelChange = fn;
    }

    registerOnTouched(fn:Function) {
        this.onTouch = fn;
    }

    writeValue(value:string) {
        this.value = value;
    }

    private onChange(value:string) {
        this.value = value;
        this.onModelChange(value);
    }

    private onBlur(value:string) {
        this.focussed = '';
    }

    private onFocus(value:string) {
        this.focussed = value;
        this.onTouch();
    }

}