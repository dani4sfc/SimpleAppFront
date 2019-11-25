import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../model/note';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {

  private notesUrl: string;

  //We give to the url string the backend api URL
  constructor(private http: HttpClient) {
    this.notesUrl = 'http://localhost:8080/notes/';
   }

   //Methods get and post
   public findAll(): Observable<Note[]>{
     return this.http.get<Note[]>(this.notesUrl+'findAll');
   }

   public save(note:Note){
     return this.http.post<Note>(this.notesUrl+'createNote', note);
   }

   public update(note:Note){
    return this.http.post<Note>(this.notesUrl+'updateNote', note);
   }

   //Check this
   public delete(id: String){
    return this.http.delete(this.notesUrl+'deleteNote'+id);

   }

}
