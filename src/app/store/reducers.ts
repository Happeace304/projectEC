import { menuReducer } from "./menu/menu.reducer";
import { sidenavReducer } from "./sidenav/sidenav.reducer";

const reducers = {
  sidenav: sidenavReducer,
  menu: menuReducer,
};

export default reducers;
