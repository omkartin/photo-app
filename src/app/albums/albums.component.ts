import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  userAlbums: any;
  user$: number;
  album$: number;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getAlbums(this.user$).subscribe((albums) => {
      for (let album in albums) {
        console.log('this.userAlbum', albums[album])
        this.data.getPhotos(albums[album].id).subscribe(adata => albums[album].thumbNailUrl = adata[0].thumbnailUrl)
      }

      this.userAlbums = albums
      console.log('this.userAlbum', this.userAlbums)
    })
  }

}
