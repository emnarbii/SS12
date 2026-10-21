import { Component, input } from '@angular/core';
import { Event } from '../../../models/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  //la card attend un iput de la part de la EventListComponent qui est le parent
  event=input.required<Event>()
}
