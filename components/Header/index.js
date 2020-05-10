import React from 'react';
import { Header, Left, Body, Title, Right } from 'native-base';

const HeaderComponent = () => (
  <Header hasTabs>
    <Left />
    <Body>
      <Title>Todo List</Title>
    </Body>
    <Right />
  </Header>
);

export default HeaderComponent;
