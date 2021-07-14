import React from 'react';
import { TouchableHighlightComponent } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styled from 'styled-components';
import themes from '../../config/themes';
import {View, Text} from 'react-native';


const ProfileContainer = styled.View`
    flex: 1;
    height: 35px;
    justify-content: center;
`;

const FirstLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ProfileTitle = styled.Text`
    font-size: 15px;
    color: ${themes.colors.gray};
    font-weight: 800;
    margin-left: 15px;
`;

// const ProfileSubTitle = styled.Text`
//     font-size: 13px;
//     color: ${themes.colors.view};
// `;

const Container = styled.View`
    background-color: ${themes.colors.brightGray};
    flex-direction: row;
    align-items: center;
    padding: 5px;
    ${Platform.select({
        ios: {
            fontFamily: "Avenir",
        },
        android: {
            fontFamily: "Roboto",
        },
    })};
`;

const SingleContainer = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

const SettingSection = ({title}) => {
    return (
            <Container>
                <SingleContainer>
                    <ProfileContainer>
                        <ProfileTitle>
                            {title}
                        </ProfileTitle>
                    </ProfileContainer>
                    
                    

                </SingleContainer>
            </Container>

    );
};

export default SettingSection;