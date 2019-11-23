import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import {Note} from '../../model/note';
import {NoteService} from '../../service/note-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, AfterViewInit {

notes: Note[];

currentId: String;

pruebaBindeo: String;

pruebaBody: String;

//@Output() dataTemp : Note;

//We call the service on the component constructor
  constructor(private noteService: NoteService) {
    this.pruebaBindeo = "odaskasjdnasdkj";
    //Cargar array de notes del servicio
   }

  //On ngOnInit, we call the method to display notes and save them on a var
  ngOnInit() {
    this.noteService.findAll().subscribe(data=>{
      this.notes = data;

    })
    
  }

  ngAfterViewInit(){
 //   console.log(this.notes)

  }

}
