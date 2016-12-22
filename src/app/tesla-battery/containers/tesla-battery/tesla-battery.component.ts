import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Stat} from '../../models/stat.interface';
import {BatteryService} from '../../tesla-battery.service';

@Component({
    selector: 'tesla-battery',
    templateUrl: './tesla-battery.component.html',
    styleUrls:['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {
    title: string = 'Range Per Charge';
    models:any;
    stats:Stat[];
    tesla: FormGroup;

    private results:Array<String> = ['60', '60D', '75', '75D', '90D', 'P100D'];

    constructor(public fb:FormBuilder, private batterService:BatteryService) { }

    ngOnInit() {
        this.tesla = this.fb.group({
            config:this.fb.group({
                speed:55,
                temperature:20,
                climate:true,
                wheels:19
            })
        });

        this.models = this.batterService.getModelData();
        this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
        this.tesla.controls['config'].valueChanges.subscribe(data => {this.stats = this.calculateStats(this.results, data)});
      
     }

     private calculateStats(models, value):Stat[] {
         console.log(this.models);
         return models.map(model=>{
             const{speed, temperature, climate, wheels} = value;
             const miles = this.models[model][wheels][climate?'on':'off'].speed[speed][temperature];
             console.log(`${model} will have ${miles} miles`)
             return {
                 model,
                 miles
             };
         })
     }
}