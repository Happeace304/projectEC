import { TestBed } from "@angular/core/testing";

import { ItemsReadService } from "./items.read.service";

describe("ItemsReadService", () => {
  let service: ItemsReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsReadService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
