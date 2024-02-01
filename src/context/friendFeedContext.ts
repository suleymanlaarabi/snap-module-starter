import { InterfaceBuilder } from "../../data.types/interface-manager";
import { ICommonContextEvents } from "./ContextTypes";

export interface IFriendFeedContext {
  events: Array<ICommonContextEvents<InterfaceBuilder>>;
}

export const friendFeedContext: IFriendFeedContext = {
  events: [],
};
