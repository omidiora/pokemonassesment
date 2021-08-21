import React, { useEffect, useState } from 'react'
import PokemonThumb from './components/PokemonThumb'
import PokemonDetails from './components/PokemonDetails';
import './App.css';


import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Pokemon from './components/PokeMon';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pokemon/>
    </ChakraProvider>
  );
}

export default App;


