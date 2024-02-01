interface ISnapActivityLoadCalls {
  events: Array<(activity: AndroidActivity) => void>;
}

export const onSnapActivityLoadCalls: ISnapActivityLoadCalls = {
  events: [],
};
