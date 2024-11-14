import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Services.component.html',
  styleUrl: './Services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent { }
