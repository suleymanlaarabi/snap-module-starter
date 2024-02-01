export interface ICommonContextEvents<StartContext> {
  start: (startContext: StartContext) => void;
}
