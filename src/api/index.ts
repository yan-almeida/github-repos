import Axios from 'axios'
import { SWRConfiguration } from 'swr'

export type HttpMethods =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'link'


const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API ?? '',
})


async function dataFetcher<TResponse = any>(
  url: string,
  method: HttpMethods = 'get'
) {
  try {
    const response = await api.request({ method, url })
    return response.data as TResponse
  } catch (error) {
    console.error('ERRO NA REQUISIÇÃO: ', error)
    throw error
  }
}

export const swrConfiguration: SWRConfiguration = {
  fetcher: dataFetcher,
  errorRetryCount: 2,
  revalidateOnFocus: true,
  shouldRetryOnError: true,
}

export default api
