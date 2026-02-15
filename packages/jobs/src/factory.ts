import { task, type TaskOptions } from "@trigger.dev/sdk/v3";

export type InitOutput = Record<string, any> | void | undefined;

export const DEFAULT_RETRY_POLICY = {
  maxAttempts: 3,
  minTimeoutInMs: 1000,
  maxTimeoutInMs: 10000,
  factor: 2,
  randomize: true,
};

/**
 * Standardized task factory for Artemis project.
 * Wraps Trigger.dev's task function with project-wide defaults.
 */
export function createTask<
  TIdentifier extends string,
  TInput = any,
  TOutput = any,
  TInitOutput extends InitOutput = any,
>(options: TaskOptions<TIdentifier, TInput, TOutput, TInitOutput>) {
  return task({
    retry: DEFAULT_RETRY_POLICY,
    ...options,
  } as any);
}
