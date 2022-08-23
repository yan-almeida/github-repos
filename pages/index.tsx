import { Center, Divider, Grid, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserRepository from "../src/components/article"
import Paginator from "../src/components/paginator"
import { useFetch } from "../src/hooks/use-fetch"
import { GithubPaginate } from "./types/github-api"
import { Repository } from "./types/repository"

const PER_PAGE = 12

const Page = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const { response, isLoading } = useFetch<GithubPaginate<Repository>>(`search/repositories?q=dnit&page=${page}&per_page=${PER_PAGE}`)

  useEffect(() => {
    if (response && !isLoading) {
      setTotalPages(Math.ceil(response.total_count / PER_PAGE))
    }
  }, [response, isLoading])


  return (
    <VStack spacing={3} px={8}>
      <Center mt={2}>
        <Paginator actualPage={page} totalPages={totalPages} setPage={setPage} />
      </Center>

      <Divider />

      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={5}
      >
        {response && response.items.map((repository) => (<UserRepository key={`respository_id_${repository.id}`} {...repository} />))}
      </Grid >
    </VStack>
  )
}

export default Page