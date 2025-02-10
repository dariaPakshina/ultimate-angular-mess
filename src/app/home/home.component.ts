import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tuiAppearance, TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-home',
  imports: [TuiIcon, TuiCardLarge, TuiHeader, TuiSurface, TuiTitle, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
