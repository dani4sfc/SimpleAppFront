import { Component, OnInit, Output, Input } from '@angular/core';
import {Note} from '../../model/note';
import {NoteService} from '../../service/note-service.service';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit{

 private note: Note[];

  //Crear variable id

  //Buscar por id

  //Editar y save note con id dado

  //Comunicacion de hijo a padre (envio al padre)
  @Output() test: String;

  //Comunicacion de hijo a padre (recepcion desde padre)
  @Input() dataTemp : String;


  //Agregar los inputs necesarios para pasar la info al editor de notas
  @Input() noteBody: String;

  @Input() noteId: String;


  constructor(private noteService: NoteService) { }

  ngOnChange(){
    
  }

  ngOnInit() {
    //console.log(this.dataTemp)
    //Cambiar a find by id
    this.editNoteSubmit();

  }


  editNoteSubmit(){
    this.noteService.findAll().subscribe(data=>{
      this.note = data
    })
  }


}
