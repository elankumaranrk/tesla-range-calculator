import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection:ChangeDetectionStrategy.OnPush,
    selector: 'tesla-car',
    templateUrl: './tesla-car.component.html',
    styleUrls:['./tesla-car.component.scss']
})
export class TeslaCarComponent  {
    @Input() wheelsize:Number;
    constructor() { }
}