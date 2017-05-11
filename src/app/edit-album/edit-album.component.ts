import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatedAlbum(albumToUpdate) {
    this.albumService.updateAlbum(albumToUpdate);
  }

  beginDeletingAlbum(albumToDelete) {
    if(confirm("Are you sure you want to delte this item from the inventory?")) {
      this.albumService.deleteAlbum(albumToDelete);
    }
  }

}
