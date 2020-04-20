import * as React from 'react';
import { ContainerWrap } from './style';
import { List } from '../components/ListOfProjects';
import { HeaderNav } from '../components/Header';
import { ListEmployessWithData } from './EmployeesWithData';


export const Container = () => (

  <>
    <HeaderNav />
    <ContainerWrap>
      <List />
      <ListEmployessWithData />
    </ContainerWrap>
  </>

);