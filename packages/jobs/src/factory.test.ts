import { describe, it, expect, vi } from "bun:test";
import { createTask } from "./factory";

// Mock @trigger.dev/sdk/v3
vi.mock("@trigger.dev/sdk/v3", () => ({
  task: vi.fn((options) => options),
}));

describe("createTask", () => {
  it("should apply default retry policies", () => {
    const options = {
      id: "test-task",
      run: async (payload: any) => {
        return { success: true };
      },
    };

    const result = createTask(options) as any;

    expect(result.retry).toBeDefined();
    expect(result.retry.maxAttempts).toBe(3);
  });

  it("should allow overriding default retry policies", () => {
    const options = {
      id: "test-task-override",
      retry: {
        maxAttempts: 5,
      },
      run: async (payload: any) => {
        return { success: true };
      },
    };

    const result = createTask(options) as any;

    expect(result.retry.maxAttempts).toBe(5);
  });
});
