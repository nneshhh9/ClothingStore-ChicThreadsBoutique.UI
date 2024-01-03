import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NotesListComponent
  // },
  // {
  //   path: 'notes',
  //   component: NotesListComponent
  // },
  // {
  //   path: 'tags',
  //   component: TagsListComponent
  // },
  // {
  //   path: 'reminders',
  //   component: RemindersListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
