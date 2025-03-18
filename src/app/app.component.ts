import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { ChildComponent } from "./child/child.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ChildComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial';

  items = new Array();

  // 子コンポーネントからデータを受け取る
  addItem(item: string) {
    console.log('親コンポーネントでデータを受け取りました！', item);
    this.items.push(item);
  }
}
