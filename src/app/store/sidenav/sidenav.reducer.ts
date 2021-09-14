import { createReducer, on } from "@ngrx/store";
import { toggle } from "./sidenav.actions";

export const initialState = false;

const _sidenavReducer = createReducer(
  initialState,
  on(toggle, (state) => !state)
);

export function sidenavReducer(state, action) {
  return _sidenavReducer(state, action);
}
