import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css']
})
export class SidebardComponent {

  constructor (private _gifsService:GifsService) {
  }

  get history () {
    return this._gifsService.history
  }

  historySearch(historyItemValue:string) {
    // const historyItemValue = this.historyItem.nativeElement.value
    this._gifsService.searchGifHistory((historyItemValue));

  }

}
