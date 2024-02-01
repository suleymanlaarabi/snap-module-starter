import { AndroidActivity } from "../../types/android/app/Activity";

interface ISnapActivityContext {
  activity: AndroidActivity | null;
  events: Array<(activity: AndroidActivity) => void>;
}

export const snapActivityContext: ISnapActivityContext = {
  activity: null,
  events: [],
};
