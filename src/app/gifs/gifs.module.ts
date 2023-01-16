import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifComponent } from './gif/gif.component';



@NgModule({
  declarations: [
    SearchComponent,
    GifsPageComponent,
    GifComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
