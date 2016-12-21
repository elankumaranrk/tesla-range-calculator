import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const CHECKBOX_VALUE_ACCESSOR = {
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(() => TeslaClimateComponent),
    multi:true
};


@Component({
    selector: 'tesla-climate',
    changeDetection:ChangeDetectionStrategy.OnPush,
    templateUrl: './tesla-climate.component.html',
    styleUrls:['./tesla-climate.component.scss'],
    providers:[CHECKBOX_VALUE_ACCESSOR]
})

export class TeslaClimateComponent implements ControlValueAccessor {
    constructor() { }
    
    @Input() limit:boolean;
    value:boolean;
    focused:boolean;

    private onTouch:Function;
    private onModelChange:Function;

    registerOnChange(fn:Function){
        this.onModelChange = fn;
    }

    registerOnTouched(fn:Function){
        this.onTouch = fn;
    }

    writeValue(value:boolean){
        this.value = value;
    }

    private onBlur(event: FocusEvent){
        this.focused = false;
    }

    private onFocus(event: FocusEvent){
        this.focused = true;
        this.onTouch();
    }
}