import { Component, Input } from '@angular/core';

/**
 * Generated class for the FlashcardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashCardComponent {

    @Input('isFlipped') flipCard:boolean;

  constructor() {
  }

}
