import { CarInterface } from './../../interfaces/car.interface';
import { CarsService } from './../../services/cars.service';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'detail-page',
    templateUrl: './detail-car.page.html',
    styleUrls: ['./detail-car.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailCarPage implements OnInit, OnDestroy{
    car: CarInterface;
    subscriptionRoute: Subscription;

    constructor(
        private _carServices: CarsService,
        private _changeDetector: ChangeDetectorRef,
        private route: ActivatedRoute){}    

    ngOnInit(){
       this.subscriptionRoute = this.route.params.subscribe( params =>{
                                    this._getCar(params.id);
                                });
    }

    ngOnDestroy(): void {
        this.subscriptionRoute.unsubscribe();
    }

    private  async _getCar(id: number){
        try {
            this.car = await this._carServices.getCarById(id);
            this._changeDetector.markForCheck();
        } catch (error) {
            
        }
    }
}