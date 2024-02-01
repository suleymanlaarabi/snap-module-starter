interface ISnapApplicationLoadCalls {
  events: Array<(context: AndroidContentContext) => void>;
}
export const onSnapApplicationLoadCalls: ISnapApplicationLoadCalls = {
  events: [],
};
