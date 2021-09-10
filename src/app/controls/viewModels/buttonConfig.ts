type buttonType =
  | "mat-icon-button"
  | "mat-button"
  | "mat-flat-button"
  | "mat-fab"
  | "mat-mini-fab";

export interface ButtonConfig {
  color?: string;
  ariaLabel?: string;
  type?: buttonType;
  cssClass?: string;
  onButtonClick?: Function;
}
