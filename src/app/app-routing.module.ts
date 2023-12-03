import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    children:[
      {
        path: 'home',
        loadChildren: () => import('./folder/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'companies1',
        loadChildren: () => import('./folder/companies1/companies1.module').then( m => m.Companies1PageModule)
      },
      {
        path: 'companies2',
        loadChildren: () => import('./folder/companies2/companies2.module').then( m => m.Companies2PageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./folder/news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'certificates',
        loadChildren: () => import('./folder/certificates/certificates.module').then( m => m.CertificatesPageModule)
      },
      {
        path: 'meta',
        loadChildren: () => import('./folder/meta/meta.module').then( m => m.MetaPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./folder/messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./folder/users/users.module').then( m => m.UsersPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
