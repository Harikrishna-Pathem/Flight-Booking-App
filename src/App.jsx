
import { ChakraProvider } from '@chakra-ui/react'
import Flag from 'react-world-flags'
import './App.css'
import MainContainer from './components/MainContainer'


function App() {

  return (
    <ChakraProvider>
       <MainContainer/>
    </ChakraProvider>
  )
}

export default App
