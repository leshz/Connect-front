import * as React from 'react';

import { ListContainer } from './style';

export const List = () => (
  <ListContainer>
    <label htmlFor="allEmployess">
      <input type="checkbox" name="" id="allEmployess" /> Todos los empleados
    </label>

    <h3>Proyetos</h3>
  </ListContainer>
);
