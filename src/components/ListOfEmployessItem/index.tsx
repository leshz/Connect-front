import * as React from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { ListItemEmployee, Column, Button } from './style';


export const ItemEmployee = () => (
  <>
    <ListItemEmployee>
      <Column className="checkbox">
        <input type="checkbox" />
      </Column>
      <Column className="imagen">
        <img src="https://fakeimg.pl/300" alt='imagen de perfil' />
      </Column>
      <Column className="name">
        <p>Pepe otoniel</p>
        <span>Senior of lazyland</span>
      </Column>
      <Column className="salary">
        <p>2.550 USD</p>
        <span>span</span>
      </Column>
      <Column className="state">
        <p>Activo</p>
      </Column>
      <Column className="actions">
        <Button className="edit" type='button'> 
          <MdModeEdit size={20} color="#FFF" />
        </Button>
        <Button className="delete" type="button">
          <MdDeleteForever size={20} color="#FFF" />
        </Button>
      </Column>
    </ListItemEmployee>

  </>
);

