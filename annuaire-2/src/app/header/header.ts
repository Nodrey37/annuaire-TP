import { Component, inject } from '@angular/core';
import { PersonApiService } from '../person-api.service';


@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly service = inject(PersonApiService);
  peopleCount=this.service.count;
  
}
