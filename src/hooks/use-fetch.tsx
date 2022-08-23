import { AxiosError } from 'axios'
import useSWR from 'swr'

type FetchReturn<TResponse, TErrorResponse = any> = {
  response: TResponse
  error?: AxiosError<TErrorResponse> | undefined
  isLoading: boolean
  reload: () => void
}

export function useFetch<TResponse = any, TErrorResponse = any> (
  url?: string | null,
  validateOnFocus = true
): FetchReturn<TResponse, TErrorResponse> {
  const { data, error, mutate: revalidate } = useSWR<
    TResponse,
    AxiosError<TErrorResponse>
  >(url ? [url] : null, {
    revalidateOnFocus: validateOnFocus,
  })

  return {
    error,
    response: data as TResponse,
    isLoading: !data && !error,
    reload: () => revalidate(),
  }
}
