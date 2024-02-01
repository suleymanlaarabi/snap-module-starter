import { InterfaceBuilder } from "../../data.types/interface-manager";
import { ICommonContextEvents } from "./ContextTypes";

export interface ISettingsContext {
  events: Array<ICommonContextEvents<InterfaceBuilder>>;
}

export const settingsContext: ISettingsContext = {
  events: [],
};
