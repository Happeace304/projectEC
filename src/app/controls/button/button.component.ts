import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "base-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class BaseButtonComponent {
  @Input("config") config: any;
  @Output("onButtonClick") onButtonClick = new EventEmitter();
  @ViewChild("btn") btn: ElementRef;

  constructor() {}

  onClick() {
    this.onButtonClick.emit();
  }

  get cssClass(): string {
    return this.config?.cssClass || "";
  }

  get type(): string {
    return this.config?.type || "";
  }

  get color(): string {
    return this.config?.color || "";
  }

  get ariaLabel(): string {
    return this.config?.ariaLabel || "";
  }
}
