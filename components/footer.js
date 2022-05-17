import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ahmad Fauzi. All Rights Reserved. Original Website from Takuya Matsuyama (MIT)
    </Box>
  )
}

export default Footer
