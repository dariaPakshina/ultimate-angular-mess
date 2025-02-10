import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'app-nav',
  imports: [TuiNavigation, TuiIcon, TuiBadge],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
