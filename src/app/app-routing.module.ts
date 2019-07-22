import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { EditComponent } from './edit/edit.component';
import { Routes,RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  {path:'',redirectTo:'/notes',pathMatch: 'full'},
  {path:'notes',component:NotesComponent},
  {path:'notes/edit/:id',component:EditComponent},
  {path : '**',component:PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent = [
  NotesComponent,
  EditComponent
]