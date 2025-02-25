import { Component } from '@angular/core';
import { CodeDirective } from '../code.directive';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-components',
  imports: [CodeDirective, TuiButton, TuiCarousel, TuiIcon],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  //   guests = model(7)
  // dishes = signal(0)
  // newGuestCame() {
  //   this.guests.update(oldGuests => oldGuests + 1);
  // }

  a = 1;
  b = 2;
  c = 3;
  msg = 'Nothing here!';

  onMsg(btnNum: number) {
    this.msg = `You clicked... ${btnNum}!`;
  }

  //---------------------

  names = ['Dan', 'Phil'];
  isDisabled1 = false;
  isDisabled2 = false;

  onAddName(name: string) {
    this.names.push(name);
  }

  // -------------------

  icon = '';
}
