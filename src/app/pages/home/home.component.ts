import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { NgStyle } from '@angular/common';
import { forkJoin } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgStyle, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  projects:any
  skills:any
  message:boolean = true
  constructor(private globalServices: GlobalService){}


  ngOnInit(){

    forkJoin({
      project: this.globalServices.getRequest("","projects"),
      skill: this.globalServices.getRequest("","skills"),
    }).subscribe({
      next:(result:any)=>{
        this.projects = result.project.projects
        this.skills = result.skill.skills
        // console.log(this.projects)
        // console.log(result)
      },
      error:(err:any)=>{
        this.message = err.ok
        console.log(this.message)
      }
    })
  }




}
