import React from 'react';
import { ContainerWrap } from './style';
import { HeaderNav } from '../components/Header';
import { ListEmployessWithData } from './EmployeesWithData';
import { ListWithData } from './ListWithData';

export const Container = () => (
  <>
    <HeaderNav />
    <ContainerWrap>
      <ListWithData />
      <ListEmployessWithData />
    </ContainerWrap>
  </>
);
