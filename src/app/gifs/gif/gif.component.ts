import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {

  user_info:any = {
    profile: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    user_name: "Sin Usuario XD"
  }


  // This method returns the array of gifs that the gifsService has
  // retrieved from the Giphy API. It is called in the template, which
  // displays the gifs.
  get results () {
    return this.gifsService.data
  }

  constructor (private gifsService:GifsService) {

  }

}
