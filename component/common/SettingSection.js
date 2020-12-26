import React from 'react';
import { TouchableHighlightComponent } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styled from 'styled-components';
import themes from '../../config/themes';


const ProfileContainer = styled.View`
    flex: 1;
    margin-bottom: 20;
`;

const FirstLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ProfileTitle = styled.Text`
    font-size: 16px;
    color: ${themes.colors.view};
    margin-bottom: 6px;
    font-weight: 800;
`;

const ProfileSubTitle = styled.Text`
    font-size: 13px;
    color: ${themes.colors.view};
`;

const Container = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-bottom: -30px;
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

const SettingSection = ({title, children}) => {
    return (
            <Container>
                <SingleContainer>
                    <ProfileContainer>
                        <ProfileTitle>
                            {title}
                        </ProfileTitle>
                        {/* {subTitle && <ProfileSubTitle>{subTitle}</ProfileSubTitle>} */}
                    </ProfileContainer>
                    {children}

                </SingleContainer>
            </Container>

    );
};

export default SettingSection;