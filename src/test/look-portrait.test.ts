import { describe, expect, it } from "vitest";
import { pickPose } from "@/components/look-portrait";
describe("pickPose", () => {
  it("stays front near the face", () => expect(pickPose(10, 10, 200, "left")).toBe("front"));
  it("returns front when far away", () => expect(pickPose(2000, 0, 200, "right")).toBe("front"));
  it("looks in four directions", () => {
    expect(pickPose(-300, 0, 200, "front")).toBe("left");
    expect(pickPose(300, 0, 200, "front")).toBe("right");
    expect(pickPose(0, -300, 200, "front")).toBe("up");
    expect(pickPose(0, 300, 200, "front")).toBe("down");
  });
  it("keeps previous direction near diagonals", () => {
    expect(pickPose(300, 290, 200, "down")).toBe("down");
    expect(pickPose(300, 290, 200, "right")).toBe("right");
  });
});
