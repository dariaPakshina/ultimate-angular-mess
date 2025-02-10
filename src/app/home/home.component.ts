import { Component } from '@angular/core';
import { tuiAppearance, TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-home',
  imports: [TuiIcon, TuiCardLarge, TuiHeader, TuiSurface, TuiTitle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
