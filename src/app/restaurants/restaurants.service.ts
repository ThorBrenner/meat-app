import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators';

import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  restaurantById(id:string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  reviewsOfRestaurant(id:string): Observable<any>{
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  MenuOfRestaurant(id:string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
      .pipe(catchError(ErrorHandler.handleError))
  }

}
