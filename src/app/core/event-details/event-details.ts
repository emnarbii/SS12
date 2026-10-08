import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  id!: number;
  constructor(private act: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
  }
}
