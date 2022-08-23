import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface PageButtonProps {
  disabled?: boolean
  active?: boolean
  p?: boolean
  onClick?: ()=>void
}

const PagButton = ({ disabled, active, children, p, onClick }: PropsWithChildren<PageButtonProps>) => {
  const activeStyle = {
    bg: "brand.600",
    _dark: {
      bg: "brand.500",
    },
    color: "white",
  };
  
  return (
    <Button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      color="gray.700"
      opacity={disabled ? 0.6 : undefined}
      _hover={!disabled ? activeStyle : undefined}
      cursor={disabled ? "not-allowed" : undefined}
      {...(active && activeStyle)}
      display={
        p &&
        !active ? {
          base: "none",
          sm: "block",
        } : undefined
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

interface PaginatorProps { 
  totalPages: number
  actualPage: number
  setPage: Dispatch<SetStateAction<number>>
}

const Paginator = ({ totalPages, actualPage, setPage }: PaginatorProps) => {


  return (
    <
    >
      <Flex>
        <PagButton disabled={actualPage <= 1 }  onClick={() => {
          if (actualPage >= totalPages) {
            setPage(actualPage - 1)
          }
        }}>
          <Icon
            as={ChevronLeftIcon}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            boxSize={4}
          />
        </PagButton>
        
        {Array.from(new Array(totalPages)).map((_, index) => (<PagButton p key={`paginator-button-${index}`} active={actualPage === index+1} onClick={() => setPage(index+1)}>{index+1}</PagButton>)
        )}

        <PagButton disabled={actualPage === totalPages} onClick={() => {
          if (actualPage <= totalPages) {
            setPage(actualPage + 1)
          }
        }}>
          <Icon
            as={ChevronRightIcon}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
            boxSize={4}
          />
        </PagButton>
      </Flex>
    </>
  );
};

export default Paginator
