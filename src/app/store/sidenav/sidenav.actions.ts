import { createAction, props } from "@ngrx/store";

export const click = createAction(
  "[Side Drawer Component] Click",
  props<{ value: boolean }>()
);
  