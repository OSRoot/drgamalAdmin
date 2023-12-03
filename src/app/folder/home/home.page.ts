import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayText = '';
  title = '';
  editor!: Editor;
  html = '';
  constructor() { }

  ngOnInit() {
    this.editor = new Editor();
    this.animateText('Dr.Gamal Elkenany Website', 90);
  }

  animateTitle(text:string, time:number) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        this.title += text[i];
      }, i * time); // Adjust the delay as needed
    }
  }
  animateText(text:string, time:number) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        this.displayText += text[i];
      }, i * time); // Adjust the delay as needed
    }
  };

logger(ev:any){
console.log(ev.target.value);

}

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
