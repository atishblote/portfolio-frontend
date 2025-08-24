import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { initDropdowns } from 'flowbite';
import { GlobalService } from '../../services/global.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [NgClass],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit {
  projects: any;
  techProject: any;
  message:any = 0
  selectedTechnology: string = 'All';
  constructor(
    private flowbiteService: FlowbiteService,
    private globalServices: GlobalService
  ) {}

  ngOnInit(): void {
    this.prpjectsFn('projects');
    this.proFIlterQ(`projects/filter?technologySlug=all`)
    this.flowbiteService.loadFlowbite((flowbite) => {
      initDropdowns();
      console.log('✅ Flowbite loaded:', flowbite);
    });
  }

  proFIlterQ(endpoint: string) {
    this.globalServices.getRequest('', endpoint).subscribe({
      next: (val: any) => {
        console.log(val.projects);
        this.techProject = val.projects;
      
       
      },
      error: (err: any) => {},
    });
  }

  prpjectsFn(endpoint: string) {
    this.globalServices.getRequest('', endpoint).subscribe({
      next: (val: any) => {
        console.log(val);
        this.message = val.code
        this.projects = val.projects;
        console.log(this.message)
      },
      error: (err: any) => {},
    });
  }

  checkBoxClick(event: Event) {
    const labelElement = event.currentTarget as HTMLLabelElement;
    const forValue = labelElement.htmlFor; 
    this.message = 0

    this.prpjectsFn(`projects/filter?technologySlug=${forValue}`)

    // this.prpjectsFn(`projects/filter/${forValue}`);
  }
}
