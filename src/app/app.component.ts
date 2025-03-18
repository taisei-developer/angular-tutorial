import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { CarService } from './car.service';
import {
  LowerCasePipe,
  DecimalPipe,
  DatePipe,
  CurrencyPipe,
} from '@angular/common';
import { ReversePipe } from './reverse.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ChildComponent,
    FormComponent,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial';
  display = '';

  // パイプ
  username = 'yOunGTECh';

  // パイプによるデータのフォーマット
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = 'Hello, World!';

  items = new Array();

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join('⭐️');
  }

  // 子コンポーネントからデータを受け取る
  addItem(item: string) {
    console.log('親コンポーネントでデータを受け取りました！', item);
    this.items.push(item);
  }
}
