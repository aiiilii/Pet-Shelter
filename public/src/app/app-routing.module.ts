import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'pets', pathMatch: 'full', component: IndexComponent },
  { path: 'pets/new', pathMatch: 'full', component: NewComponent },
  { path: 'pets/:id', pathMatch: 'full', component: ShowComponent },
  { path: 'pets/:id/edit', pathMatch: 'full', component: EditComponent},

  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: '**', redirectTo: '/pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
