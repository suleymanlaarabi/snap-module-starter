interface ISnapEnhancerLoadCalls {
  events: Array<(context: AndroidContentContext) => void>;
}

export const onSnapEnhancerLoadCalls: ISnapEnhancerLoadCalls = {
  events: [],
};
