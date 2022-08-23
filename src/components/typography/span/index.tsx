import { Text } from '@chakra-ui/react'

const Span = ({ text }: TypographyProps) => {
  return <Text
    fontSize="sm"
    color="gray.600"
    _dark={{
      color: "gray.400",
    }}
    noOfLines={[1, 2]}
  >
    {text}
  </Text>
}

export default Span