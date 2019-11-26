import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note-service.service';
import { Note } from '../../model/note';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  note: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService) {
      this.note= new Note();
     }
     

  onSubmit(){

    this.noteService.save(this.note).subscribe(result => this.gotoNoteList());
    
  }   

  gotoNoteList(){
    this.router.navigate(['/notes']);
  }

  ngOnInit() {
  }

}
