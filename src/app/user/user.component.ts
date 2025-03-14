import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Inputデコレータ：親コンポーネントからデータを受け取るために使用
  // 親コンポーネントでは<app-user occupation="occupation">
  @Input() occupation = '';
}
