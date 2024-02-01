import { AndroidContentContext } from "../../types/android/content/Context";

interface ISnapApplicationContext {
  context: AndroidContentContext | null;
  events: Array<(context: AndroidContentContext) => void>;
}
export const snapApplicationContext: ISnapApplicationContext = {
  context: null,
  events: [],
};
