import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { Repository } from '../../../pages/types/repository'
import P from '../typography/p'
import Span from '../typography/span'

const UserRepository = ({ ...repository }: Repository) => {
  return (
    <Box
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Span text={format(new Date(repository.created_at), 'dd/MM/yyyy')} />

        {repository.language && <Link
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{
            bg: "gray.500",
          }}
        >
          {repository.language}
        </Link>}
      </Flex>

      <Box mt={2}>
        <Text
          fontSize="2xl"
          color="gray.700"
          _dark={{
            color: "white",
          }}
          fontWeight="700"
          _hover={{
            color: "gray.600",
            _dark: {
              color: "gray.200",
            },
          }}
        >
          {repository.full_name}
        </Text>

        <P text={repository?.description ?? 'Repo without description 😭'}
        />
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Link
          fontSize="1xl"
          color="gray.700"
          _dark={{
            color: "white",
          }}
          fontWeight="700"
          _hover={{
            color: "gray.600",
            _dark: {
              color: "gray.300",
            }, textDecor:'underline' 
          }}
          href={repository.html_url}
        >
          Check online!
        </Link>

        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{
              base: "none",
              sm: "block",
            }}
            src={repository.owner.avatar_url}
            alt="avatar"
          />
          <Link
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            fontWeight="700"
            cursor="pointer"
            href={repository.owner.html_url}
          >
            {repository.owner.login}
          </Link>
        </Flex>
      </Flex>
      </Box>
  )
}

export default UserRepository
