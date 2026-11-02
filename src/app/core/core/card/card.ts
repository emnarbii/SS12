import { Component, input, output } from '@angular/core';
import { Event } from '../../../models/event';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  //la card attend un iput de la part de la EventListComponent qui est le parent
  event = input.required<Event>();
  incLikes = output<Event>();
  supprimer = output<number>();
}
