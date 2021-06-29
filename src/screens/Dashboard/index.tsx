import React from "react";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  Text,
  Icon,
} from "./styles";

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/34238796?v=4",
            }}
          />

          <User>
            <Text>Olá,</Text>
            <Text>Gabriel</Text>
          </User>
        </UserInfo>

        <Icon name="power" />
      </UserWrapper>
    </Header>
  </Container>
);

export default Dashboard;
