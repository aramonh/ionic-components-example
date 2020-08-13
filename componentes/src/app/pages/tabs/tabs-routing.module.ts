import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flash'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'flash',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path: 'apps',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path: 'send',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
