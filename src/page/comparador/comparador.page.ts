import { CarInterface } from './../../interfaces/car.interface';
import { CarsService } from './../../services/cars.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
@Component({
    selector: 'comparador-page',
    templateUrl: './comparador.page.html',
    styleUrls: ['./comparador.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparadorPage implements OnInit, OnDestroy{
    subscriptionParams: Subscription;
    car1 : CarInterface;
    car2 : CarInterface;

    constructor(
        private route: ActivatedRoute,
        private _carServices: CarsService,
        private _changeDetector: ChangeDetectorRef){}

    ngOnInit(): void {
        this.subscriptionParams = this.route.params.subscribe( params =>{
                                        this._getCars(params);
                                    });
    }

    ngOnDestroy(): void {
        this.subscriptionParams.unsubscribe();
    }

    private async _getCars(params){
        try {
            this.car1 = await this._carServices.getCarById(params.car1);
            this.car2 = await this._carServices.getCarById(params.car2);
            this._changeDetector.markForCheck();
        } catch (error) {
            
        }
    }
    
}