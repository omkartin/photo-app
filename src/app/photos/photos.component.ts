import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  userAlbumPhotos: any;
  album$: number;
  photoUrl: string;
  photoTitle: string;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.album$= params.id);
  }

  ngOnInit() {
    this.data.getPhotos(this.album$).subscribe((photos) => {
      this.userAlbumPhotos = photos;
    })
  }

  openImageModal (photoData) {
    this.photoUrl = photoData.thumbnailUrl;
    this.photoTitle = photoData.title;
    var modal = document.getElementById('photoModal');
    modal.style.display = "block";
  }

  closeModal () {
    var modal = document.getElementById('photoModal');
    modal.style.display = "none";
  }

}
