import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent implements OnInit {
  @Input("config") config: any;
  constructor() {}

  ngOnInit(): void {}

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
