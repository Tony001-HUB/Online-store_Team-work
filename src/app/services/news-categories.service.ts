import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsCategoriesService {


  categories = [
    {
      categoryId: '426d983e-bb80-4b13-f4fe-08da1c4bab8e',
      title: 'Открытие новых магазинов',
      description: 'Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения',
      src: './assets/img/news-img1.png',
    },
    {
      categoryId: 'b4a40d58-b021-4103-f4ff-08da1c4bab8e',
      title: 'Что такое электровелосипед?',
      description: 'Итак, обычный велосипед и не более необычная приставка «Электро», что же это такое, откуда он взялся и зачем все усложнять?',
      src: './assets/img/news-img2.png',
    },
    {
      categoryId: '631a86b4-9e80-4381-f505-08da1c4bab8e',
      title: 'Новинки в мире электроники',
      description: 'Выставка CES 2022 продемонстрировала изменения подходов к управлению домашней техникой и самим устройствам.',
      src: './assets/img/news-img3.png',
    },
    {
      categoryId: '85a44524-153f-4497-f500-08da1c4bab8e',
      title: 'Как выбрать электросамокат?',
      description: 'Здесь обязательно должно быть большое вступление на предмет того, насколько популярный, удобный и современный вид транспорта электросамокат.',
      src: './assets/img/news-img4.png',
    },
    {
      categoryId: 'e5c662ff-4021-4006-f504-08da1c4bab8e',
      title: 'Новые шаги к разработке очков',
      description: 'Выходим за рамки социальной платформы и фокусируется на разработке технологии дополненной реальности.',
      src: './assets/img/news-img5.png',
    },
    {
      categoryId: '8a47db80-7b7c-4b5b-f503-08da1c4bab8e',
      title: 'Как выбрать smart-браслет',
      description: 'В этом году браслеты получят важное улучшение в виде еще большего дисплея с разрешением 192 x 490 пикселей.',
      src: './assets/img/news-img6.png',
    },
    {
      categoryId: '1ccdba4e-1144-4732-f501-08da1c4bab8e',
      title: 'Как выбрать электронную книгу',
      description: 'Этот раздел— для тех, кто хочет сразу купить хорошую книгу и не переплачивать за лишние функции.',
      src: './assets/img/news-img7.png',
    },
    {
      categoryId: 'e45d3687-17d9-4576-f502-08da1c4bab8e',
      title: 'Всё о выборе smart-часов',
      description: 'Если вы решились на покупку «умных часов», то следует обстоятельно подойти к их выбору.',
      src: './assets/img/news-img8.png',
    }
  ]

  constructor(private http: HttpClient) { }

  getAllCategoriesNews(): Observable<any> {
    return this.http.get<any>('https://xnews.azurewebsites.net/Categories/list')
  }

  getAllNews(): Observable<any> {
    return this.http.get<any>('https://xnews.azurewebsites.net/Categories/631a86b4-9e80-4381-f505-08da1c4bab8e/posts')
  }
}


