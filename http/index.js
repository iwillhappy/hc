import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const FetchData = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    res: data,
    isLoading,
    isError: error,
  };
};
