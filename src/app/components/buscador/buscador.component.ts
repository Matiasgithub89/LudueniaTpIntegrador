import { Component,  EventEmitter,  OnInit, Output} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  product = new FormControl();
  searchProduct:string|null;
  @Output() newItemSearchEvent = new EventEmitter<string>();//emito el producto que quiero buscar en el componente padre
  constructor() { }

  ngOnInit() {
  }
  addNewSearch(value: string) {
    this.newItemSearchEvent.emit(value);
  }
  getErrorMessage() {
    if (this.product.hasError('required')) {
      return 'You must enter a value';
    }

    return this.product.hasError('product') ? 'Not a valid product' : '';
  }
  buscar(){
    this.searchProduct=this.product.value;
    console.log("searchProduct en el buscador:", this.searchProduct)
  }
}
