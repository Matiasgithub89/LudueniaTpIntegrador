import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
private baseUrl="https://api.mercadolibre.com/sites/MLA/search?q="
constructor(private http:HttpClient) { }

getAll(busqueda:string){

  return this.http.get(this.baseUrl+busqueda);

}
getById(id:string){
  return this.http.get(`https://api.mercadolibre.com/items/${id}`).pipe(map((value:any)=>value));
}
}
