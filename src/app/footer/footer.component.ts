import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  forClientMenu = [
    {name: 'Как купить'},
    {name: 'Доставка и оплата'},
    {name: 'Кредит'},
    {name: 'Политика конфиденциальности'},
    {name: 'Вопросы и ответы (F.A.Q.)'},
    {name: 'Сервис и гарантия'},
  ]
  aboutMenu = [
    {name: 'Отзывы'},
    {name: 'Наши преимущества'},
    {name: 'История компании'},
    {name: 'Сотрудничество'},
    {name: 'Партнёрская программа'},
    {name: 'Вакансии'},
  ]
  cooperationMenu = [
    {name: 'Оптом'},
    {name: 'Дропшиппинг'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
