import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Contact.component.html',
  styleUrl: './Contact.component.css',

})
export class ContactComponent { }
