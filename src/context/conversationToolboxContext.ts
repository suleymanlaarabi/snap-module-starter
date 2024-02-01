import { InterfaceBuilder } from "../../data.types/interface-manager";
import { ICommonContextEvents } from "./ContextTypes";

export interface IConversationToolboxContext {
  events: Array<ICommonContextEvents<InterfaceBuilder>>;
}

export const conversationToolboxContext: IConversationToolboxContext = {
  events: [],
};
