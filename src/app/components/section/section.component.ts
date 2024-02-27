import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

    isAdmin():boolean{
      return !!localStorage.getItem('roles')?.includes('ADMIN');
    }
}
