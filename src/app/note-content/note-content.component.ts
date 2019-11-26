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


  constructor(private noteService: NoteService,  private route: ActivatedRoute, private router: Router) { 
  
  }

  ngOnChange(){
    
  }

  onSubmit(){

    this.noteService.update(this.note.id, this.note).subscribe(result => this.router.navigate(['notes']));
    
  }

  ngOnInit() {

    this.editSimpleNote();

  }


  editSimpleNote(){
   var id = this.route.snapshot.params['id'];
    this.noteService.findById(id).subscribe(data=>{
      this.note = data;
    });
  }

}
