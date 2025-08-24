import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { initCollapses, initDropdowns } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'porfolio-frontend';

  constructor(private flowbiteService: FlowbiteService) {}

  ngAfterViewInit() {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initDropdowns()
      initCollapses()
      console.log('✅ Flowbite loaded:', flowbite);
    });
  }

}
