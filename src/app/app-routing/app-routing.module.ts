import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../note-list/note-list.component';
import { NoteFormComponent } from '../note-form/note-form.component';
import {NoteContentComponent} from '../note-content/note-content.component';

const routes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'addnote', component: NoteFormComponent },
  { path: 'content/:id', component: NoteContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
