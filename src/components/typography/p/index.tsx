import { Text } from '@chakra-ui/react'


const P = ({ text }: TypographyProps) => {
  return <Text
    mt={2}
    color="gray.600"
    _dark={{
      color: "gray.300",
    }}
    noOfLines={[1, 2]}
  >
    {text}
  </Text>
}

export default P