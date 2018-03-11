import { CarsService } from './../../services/cars.service';
import { CarInterface } from './../../interfaces/car.interface';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../router/routes';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
	listCars: Array<CarInterface> = [];
	wordToSearch: string = '';
	idsArrayToCompare: Array<number> = [];
	
	constructor(
		private _carService: CarsService,
		private _router: Router,
		private _chnageDetector: ChangeDetectorRef) { }

	ngOnInit() {
		this._updateListCars();
	}
	  
	private async _updateListCars(){
		try {
			this.listCars = await this._carService.getAllCars();
			this._chnageDetector.markForCheck();
		} catch (error) {
			console.error(error);
		}
	}

	goToDetail(id: number){
		this._router.navigate([`${ROUTES.HOME}/${id}`]);
	}

	selectToCompare(event, id: number){
		event.currentTarget.checked ? this._addIdIntoArray(id) : this._removeIdIntoArray(id);
	}

	inputCompareIsDisabled(id: number): boolean{
		return this.idsArrayToCompare.length >= 2 && this.idsArrayToCompare.indexOf(id) === -1;
	}

	compareCars(){
		const [ car1, car2] = this.idsArrayToCompare;
		this._router.navigate([`${ROUTES.COMPARADOR}`,{car1, car2}]);
	}

	get isButtonCompareShowed(){
		return this.idsArrayToCompare.length === 2;
	}

	private _addIdIntoArray(id: number){
		this.idsArrayToCompare.push(id);
	}

	private _removeIdIntoArray(id:number){
		const index = this.idsArrayToCompare.indexOf(id);
		this.idsArrayToCompare.splice(index, 1);
		}

}
