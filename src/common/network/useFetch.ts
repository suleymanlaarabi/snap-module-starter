import {
  EnumHttpMethode,
  NetworksHeader,
  NetworksResponse,
} from "../../../data.types/networking";

interface UseFetchProps {
  url: string;
  body?: string;
  methode?: EnumHttpMethode;
  headers?: NetworksHeader[];
}

interface UseFetchResponse {
  getJSON(): () => any;
  response: NetworksResponse;
}

export default function useFetch(
  props: UseFetchProps,
  callback: (res: UseFetchResponse) => void
) {
  shortToast(props.url);
  const request = networking.newRequest().url(props.url);

  if (props.methode != EnumHttpMethode.GET && props.methode) {
    request.method(props.methode, props.body);
  }

  props.headers?.forEach((header) => {
    request.addHeader(header.name, header.value);
  });

  networking.enqueue(request, (error, response) => {
    if (error != null) {
      logInfo("Failed to make request: " + error);
      return;
    }
    callback({
      getJSON: () => JSON.parse("" + response.bodyAsString),
      response: response,
    });
  });
}
