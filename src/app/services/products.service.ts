import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getData(tableName: string): Observable<any[]> {
    return of(Products[tableName]);
  }
}
