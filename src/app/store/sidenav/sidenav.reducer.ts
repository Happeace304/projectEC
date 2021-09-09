import { createReducer, on } from "@ngrx/store";
import { click } from "./sidenav.actions";

export const initialState = { value: true };

const _sidenavReducer = createReducer(
  initialState,
  on(click, (state, { value }: { value: boolean }) => {
    return { ...state, value: !value };
  })
);

export function sidenavReducer(state, action) {
  return _sidenavReducer(state, action);
}
