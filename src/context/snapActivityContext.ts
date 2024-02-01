import { AndroidActivity } from "../../types/android/app/Activity";
import { ICommonContextEvents } from "./ContextTypes";

export interface ISnapActivityContext {
  activity: AndroidActivity;
  events: Array<ICommonContextEvents<AndroidActivity>>;
}

export const snapActivityContext: ISnapActivityContext = {
  activity: null,
  events: [],
};
