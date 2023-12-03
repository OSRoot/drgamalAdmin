import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'عن دكتور جمال', url: 'folder/home', icon: 'information-circle' },
    { title: 'الشركات قسم 1', url: 'folder/companies1', icon: 'business' },
    { title: 'الشركات قسم 2', url: 'folder/companies2', icon: 'business' },
    { title: 'الأخبار', url: 'folder/news', icon: 'newspaper' },
    { title: 'الشهادادت', url: 'folder/certificates', icon: 'ribbon' },
    { title: 'الرسائل', url: 'folder/messages', icon: 'mail' },
    { title: 'المستخدمون', url: 'folder/users', icon: 'people' },

  ];
  public labels = [];
  constructor() {}
}
