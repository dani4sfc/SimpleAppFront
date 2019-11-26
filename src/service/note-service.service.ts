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

   //Add findById if necessary

   public findById(id: String): Observable<Note>{
    return this.http.get<Note>(this.notesUrl+id);
   }

   //Methods get and post
   public findAll(): Observable<Note[]>{
     return this.http.get<Note[]>(this.notesUrl);
   }

   public save(note:Note){
     return this.http.post<Note>(this.notesUrl, note);
   }

   //Pass url+id with the note
   public update(id: String, note:Note){
    return this.http.put<Note>(this.notesUrl+id, note);
   }

   //Check this
   public delete(id: String){
    return this.http.delete(this.notesUrl+id);

   }

}
