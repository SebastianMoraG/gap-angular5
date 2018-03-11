import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class CarsService {
    private readonly _url = "./assets/car.json";
    
    constructor(private http: HttpClient) { }

    getAllCars(): Promise<any>{
        return this.http.get(this._url).map((res:any) => res.data).toPromise();
    }

    getCarById(id: number): Promise<any>{
        return this.http.get(this._url)
                    .flatMap((res:any) => res.data)
                    .filter( (res:any) => res.id == id)
                    .toPromise();
    }

}