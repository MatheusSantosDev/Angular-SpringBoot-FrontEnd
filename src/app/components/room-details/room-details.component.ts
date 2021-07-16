import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/service/room.service';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room: Room = new Room;

  constructor(private route: ActivatedRoute, private router: Router,
    private RoomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.RoomService.getRoom(this.id)
    .subscribe(
      data => {
        console.log(data)
        this.room = data;
      },
      error => console.log(error)
    );
  }
  list() {
    this.router.navigate(['rooms']);
  }

}
