import React from 'react';
import { Header, Body, Title } from 'native-base';

import styles from './header.styles';

const HeaderComponent = () => (
  <Header hasTabs>
    <Body style={styles.headerTitle}>
      <Title>Todo List</Title>
    </Body>
  </Header>
);

export default HeaderComponent;
