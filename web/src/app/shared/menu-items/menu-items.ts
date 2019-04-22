import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'home',
        short_label: 'N',
        name: 'Home',
        type: 'link',
        icon: 'feather icon-menu',
        nombrehome: 'home'
      },
      {
        state: 'category',
        short_label: 'N',
        name: 'Category',
        type: 'link',
        icon: 'feather icon-plus',
        nombreproduct: 'category'
      },
      {
        state: 'product',
        short_label: 'N',
        name: 'Product',
        type: 'link',
        icon: 'feather icon-menu',
        nombreproduct: 'product'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
