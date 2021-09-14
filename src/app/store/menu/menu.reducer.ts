import { createReducer, on } from "@ngrx/store";
import { menuClick } from "./menu.actions";

export interface menuItem {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
}
export const menuConstants = {
  home: "HOME",
  about: "ABOUT",
};
export const initialState: menuItem[] = [
  {
    id: menuConstants.home,
    name: "home",
    url: "/",
    isActive: true,
  },
  {
    id: menuConstants.about,
    name: "about",
    url: "/about",
    isActive: false,
  },
];

const mappingMenuActive = (menus: menuItem[], id: string) =>
  menus.map(({ ...item }: menuItem) => ({
    ...item,
    isActive: item.id === id,
  }));

const _menuReducer = createReducer(
  initialState,
  on(menuClick, (state: menuItem[], { id }) => mappingMenuActive(state, id))
);

export function menuReducer(state, action) {
  return _menuReducer(state, action);
}
