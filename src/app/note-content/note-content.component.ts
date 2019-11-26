import { Component, OnInit, Output, Input } from '@angular/core';
import {Note} from '../../model/note';
import {NoteService} from '../../service/note-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit{

 //private notes: Note[];

 public note: Note;

  //Crear variable id

  //Buscar por id

  //Editar y save note con id dado

  //Comunicacion de hijo a padre (envio al padre)

  //Comunicacion de hijo a padre (recepcion desde padre)
 // @Input() dataTemp : String;


  //Agregar los inputs necesarios para pasar la info al editor de notas
 // @Input() noteBody: String;

  //@Input() noteId: String;


  constructor(private noteService: NoteService,  private route: ActivatedRoute, private router: Router) { 
  
    //route.params.
  }

  ngOnChange(){
    
  }

  onSubmit(){

    console.log(this.note.title);

    this.noteService.update(this.note.id, this.note).subscribe(result => this.router.navigate(['notes']));
    
  }

  ngOnInit() {
    //console.log(this.dataTemp)
    //Cambiar a find by id
   // this.editNoteSubmit();

    this.editSimpleNote();

  }

  /*
    this.hero$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getHero(params.get('id')))
  */

  editSimpleNote(){
   var id = this.route.snapshot.params['id'];
    this.noteService.findById(id).subscribe(data=>{
      this.note = data;
    });
  }

/*
  editNoteSubmit(){
    this.noteService.findAll().subscribe(data=>{
      this.notes = data
    })
  }
*/

}
