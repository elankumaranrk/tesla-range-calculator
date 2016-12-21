import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import {TeslaCarComponent} from './components/tesla-car/tesla-car.component';
import {TeslaStatsComponent} from './components/tesla-stats/tesla-stats.component';
import {TeslaCounterComponent} from './components/tesla-counter/tesla-counter.component';

import { BatteryService }   from './tesla-battery.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [TeslaBatteryComponent],
    declarations: [TeslaBatteryComponent, TeslaCarComponent, TeslaStatsComponent, TeslaCounterComponent],
    providers: [BatteryService],
})
export class TeslaBatteryModule { }
