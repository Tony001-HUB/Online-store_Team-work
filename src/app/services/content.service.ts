import { Injectable } from "@angular/core";
import { ICatalog } from "../models/catalog";
import { ISlider, IToolbar } from "../models/toolbar";

@Injectable({providedIn: 'root'})
export class ContentService {
    constructor() {}

    public catalogMenu: ICatalog[] = [
        {name: 'Гироскутеры', nameEng: 'gyroscooters', src: '../../assets/icons/catalog/hydro_scooter.svg'},
        {name: 'Электросамокаты', nameEng: 'electricKickScooters', src: '../../assets/icons/catalog/electric_scooter.svg'},
        {name: 'Моноколеса', nameEng: 'monowheels', src: '../../assets/icons/catalog/unicycle.svg'},
        {name: 'Сигвеи и мини-сигвеи', nameEng: 'segways', src: '../../assets/icons/catalog/segway.svg'},
        {name: 'Электроскутеры', nameEng: 'electricScooters', src: '../../assets/icons/catalog/electric_scooter_2.svg'},
        {name: 'Электровелосипеды', nameEng: 'electricBikes', src: '../../assets/icons/catalog/electric_bike.svg'},
        {name: 'Электроскейты', nameEng: 'electricSkateboards', src: '../../assets/icons/catalog/electric_skateboard.svg'},
        {name: 'Электромобили', nameEng: 'electricCars', src: '../../assets/icons/catalog/electric_car.svg'},
        {name: 'Аксессуары', nameEng: 'accessories', src: '../../assets/icons/catalog/accessories.svg'},
        {name: 'Умные игрушки', nameEng: 'smartToys', src: '../../assets/icons/catalog/smart_toy.svg'},
        {name: 'Smart Watch', nameEng: 'smartWatch', src: '../../assets/icons/catalog/smart_watch.svg'}
    ];

    public accountMenu: IToolbar[] = [
        {name: 'Общие сведения'},
        {name: 'Личные данные'},
        {name: 'История покупок'},
        {name: 'Избранное'},
        {name: 'Сменить пароль'},
        {name: 'Выйти'}
    ]

    public slides: ISlider[] = [
        {src: '../../assets/images/smartwatch.png'},
        {src: '../../assets/images/scooters.jpeg'},
        {src: '../../assets/images/smartbracelete.jpeg'},
        {src: '../../assets/images/smartglasses.jpeg'},
        {src: '../../assets/images/smartcar.jpeg'},
        {src: '../../assets/images/smartapple.jpeg'}
    ]
}