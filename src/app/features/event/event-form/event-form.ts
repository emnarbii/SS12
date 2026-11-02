import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { disabled } from '@angular/forms/signals';
import { EventService } from '../../../services/event-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule, FormsModule], //FormsModule pour creer des formulaires driven
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  router = inject(Router);
  item1 = new FormControl('', [Validators.required, Validators.minLength(3)]); // un champ input qu'on peut controller sa valeur
  eventForm!: FormGroup;
  eventFB!: FormGroup;
  categories: String[] = ['conf', 'seminaire', 'réunion', 'autre'];
  constructor(private FB: FormBuilder) {
    this.eventForm = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
      date: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      prix: new FormControl('', [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('images/event.png'),
      nbPlaces: new FormControl('', [Validators.required, Validators.min(10)]),
      category: new FormControl('', Validators.required),
      nbLikes: new FormControl('0'),
    });

    console.log(this.eventForm.controls['titre']);

    this.eventFB = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      date: ['', Validators.required],
      lieu: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['images/event.png'],
      nbPlaces: ['', [Validators.required, Validators.min(10)]],
      category: ['', Validators.required],
      nbLikes: ['0'],
    });
  }

  get description() {
    return this.eventForm.get('description');
  }

  submit() {
    return this.eventService
      .addEvent(this.eventForm.value)
      .subscribe(() => this.router.navigate(['/events']));
  }
}
