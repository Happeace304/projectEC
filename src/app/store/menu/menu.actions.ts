import { createAction, props } from "@ngrx/store";

export const menuClick = createAction(
  "[Menu Item] Click",
  props<{ id: string }>()
);
