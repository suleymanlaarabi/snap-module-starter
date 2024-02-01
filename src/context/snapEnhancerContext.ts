import { AndroidContentContext } from "../../types/android/content/Context";

interface ISnapEnhancerContext {
  context: AndroidContentContext | null;
  events: Array<(context: AndroidContentContext) => void>;
}

export const snapEnhancerContext: ISnapEnhancerContext = {
  context: null,
  events: [],
};
