import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    resolve: { data: ResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
