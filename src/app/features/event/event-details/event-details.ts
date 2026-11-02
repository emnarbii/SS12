import { Component, computed, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event-service';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  idActivatedRoute!: number;
  id = input.required({ transform: numberAttribute });
  eventService = inject(EventService);
  router=inject(Router)
  eventD = signal<Event | undefined>(undefined);

  constructor(
    private act: ActivatedRoute,
    private service: EventService,
  ) {
    effect(() => {
      next: this.eventService.getEventById(this.id()).subscribe((event) => this.eventD.set(event));
      error: () => console.error('event non trouvé');
    });
  }

  //injector va instancier/ crer l'instance ActivatedRoute act= new ActivatedRoute

  // evt = computed(() => this.eventService.getEventById(this.id()));
  ngOnInit() {
    console.log(this.act);
    this.idActivatedRoute = this.act.snapshot.params['id'];
  }

  delete() {

    this.eventService.delete(this.id()).subscribe({

      next: () => {
        alert('Événement supprimé avec succès !');

        // Redirection vers la liste des événements
        this.router.navigate(['/events']);
      },

      error: (err) => {
        console.error('Erreur lors de la suppression', err);
        alert('Impossible de supprimer cet événement');
      }

    });

  }

}
