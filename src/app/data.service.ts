import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getAlbums(userId) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + userId + '/albums/');
  }

  getPhotos(albumId) {
    return this.http.get('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos/');
  }
}
