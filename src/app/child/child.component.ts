import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // 親コンポーネントにデータを送信するためのイベントを設定
  @Output() addItemEvent = new EventEmitter<string>();

  // ボタンをクリックしたら、親コンポーネントにデータを送信
  addItem(event: Event) {
    console.log('子コンポーネントでボタンがクリックされました！', event);
    this.addItemEvent.emit('🐢');
  }
}
