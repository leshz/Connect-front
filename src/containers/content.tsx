import * as React from 'react';
import { ContainerWrap } from './style';
import { List } from '../components/List';
import { HeaderNav }  from '../components/Header';


export const Container = () => (

  <>
    <HeaderNav />
    <ContainerWrap>
      <List />
    </ContainerWrap>
  </>

);