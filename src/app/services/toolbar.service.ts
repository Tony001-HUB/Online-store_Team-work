import { Injectable } from "@angular/core";
import { Toolbar } from "../models/toolbar.interface";

@Injectable({providedIn: 'root'})
export class ToolbarService {
    constructor() {}

    public accountMenu: Toolbar[] = [
        {name: 'Общие сведения'},
        {name: 'Личные данные'},
        {name: 'История покупок'},
        {name: 'Избранное'},
        {name: 'Сменить пароль'},
        {name: 'Выйти'}
    ]
}