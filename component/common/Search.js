import React from 'react';
import { TouchableOpacity } from "react-native";

//import styles and assets
import styled from "styled-components";
import {colors} from "../../config/themes";
import { EvilIcons } from "@expo/vector-icons";
import themes from '../../config/themes';

export const SearchTap = ({setSearch, icon, size, placeholder}) => {
    return (
        <Container>
            <TouchableOpacity onPress={setSearch}>
                <SearchArea>
                    <Flex>
                        <EvilIcons name={icon} size={size} color="black" />
                        <Placeholder>{placeholder}</Placeholder>
                    </Flex>
                </SearchArea>
            </TouchableOpacity>
        </Container>
    );
};

export const SearchInput = ({ ...otherProps }) => {
    return (
        <InputArea>
            <EvilIcons name="search" size={20} color="black" />
            <Input autoFocus={true} {...otherProps} />
        </InputArea>
    );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: -60;
  margin-right: -60;
`;

const SearchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border: 1px solid ${"black"};
  border-radius: 25px;
  padding: 10px;
`;

const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 75%;
  border: 1px solid ${"black"};
  border-radius: 25px;
  padding: 10px;
  margin-top: 15px;
`;

const Flex = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  margin-left: 10px;
`;

const Placeholder = styled.Text`
  color: ${"black"};
  margin-left: 10px;
`;