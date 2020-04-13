import * as React from 'react';
import { ContainerWrap } from './style';
import { List } from '../components/ListOfProjects';
import { HeaderNav } from '../components/Header';
import { ListEmployees } from '../components/ListOfEmployees';


export const Container = () => (

  <>
    <HeaderNav />
    <ContainerWrap>
      <List />
      <ListEmployees />
    </ContainerWrap>
  </>

);