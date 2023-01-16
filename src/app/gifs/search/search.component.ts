import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  // !Un operador que se asegura que el valor no es nulo es "!"
  // * El ViewChild me permite obtener datos por clase, id, referencia (este caso), etc.
  // * Eñ ElementRef es el tipo de dato de un ViewChild
  // *<HTMLInputElement> es el tipo de dato de la referencia obtenida: Me sirve para tener acceso a los params del
  // *ViewChild
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  buscar() {
    const value = this.txtSearch.nativeElement.value;
    if (value.trim().length == 0) {
      return;
    }
    this._gifsService.searchGif(value);
    this.txtSearch.nativeElement.value = '';
  }

  constructor(private _gifsService: GifsService) {}
}
