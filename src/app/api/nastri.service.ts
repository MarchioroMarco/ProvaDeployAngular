import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NastriService {

  constructor(private apiService: ApiService) { }
  private readonly path = "nastri";

  public getById(id): Observable<any>{
    return this.apiService.get(this.path + "/" + id);
  }
}
