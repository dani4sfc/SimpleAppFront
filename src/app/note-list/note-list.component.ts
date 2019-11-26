import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import {Note} from '../../model/note';
import {NoteService} from '../../service/note-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, AfterViewInit {

notes: Note[];

//We call the service on the component constructor
  constructor(private noteService: NoteService, 
    private router: Router) {
   }

  //On ngOnInit, we call the method to display notes and save them on a var
  ngOnInit() {
      this.loadData();
    }


  loadData(){
    this.noteService.findAll().subscribe(data=>{
      this.notes = data;
  })
}

  //Method to delete note
  deleteNote(id: string){
    this.noteService.delete(id)
    .subscribe(
      data => {
        this.loadData();
      }
    )
  }

  //Method to edit note

  noteContent(id: string){
    this.router.navigate(['content', id]);
  }


  ngAfterViewInit(){
 //   console.log(this.notes)

  }

}
