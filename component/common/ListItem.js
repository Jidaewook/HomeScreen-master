import React, {useState} from 'react';
import { 
    View, Text, TouchableHighlight, TouchableWithoutFeedback, Switch, StyleSheet
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


import Swipeable from 'react-native-gesture-handler/Swipeable';
import styled from 'styled-components';
import themes from '../../config/themes';
import Agreement from '../../Screen/ProfileDetail/Agreement';
import Setting from '../../Screen/Setting';
import ToggleSwitch from '../../Screen/ProfileDetail/ToggleSwitch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeConsumer } from 'styled-components';

const Container = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    ${Platform.select({
        ios: {
            fontFamily: "Avenir",
        },
        android: {
            fontFamily: "Roboto",
        },
    })};
    padding: 10px;
`;

const TripContainer = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
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
    flex-direction: row;
    justify-content: space-between;
`;

const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 10px;
    margin-right: 10px;
`;

const Marker = styled.View`
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: ${themes.colors.view};
    border-radius: 8px;
    border: 1px solid ${themes.colors.view};
    margin-right: 15px;
`;

const Icon = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;

const ProfileContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

const ProfileContainerList = styled.View`
    flex: 1;
    /* flex-direction: row; */
`;

const FirstLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ProfileTitle = styled.Text`
    font-size: 16px;
    color: ${themes.colors.view};
    margin-bottom: 10px;
    font-weight: 600;
    margin-left: 10;
    align-items: center;
    justify-content: center;
`;


const ProfileTitleList = styled.Text`
    font-size: 14px;
    width: 85%;
    color: ${themes.colors.view};
    margin-bottom: 6px;
    font-weight: 600;
    margin-left: 10;
    margin-bottom: 25;
    align-items: center;
    justify-content: center;
`;

const ProfileSubTitle = styled.Text`
    font-size: 13px;
    color: ${themes.colors.view};
    align-items: center;
    width: 50%;
    margin-left: 10px;
`;


export const ListItem = ({
    RightActions,
    onPress,
    image,
    title,
    subtitle,
    arrow
}) => {
    return (
        <Swipeable
            renderRightActions={RightActions} 
        >
            <TouchableHighlight
                underlayColor={themes.colors.view} 
                onPress={onPress}
            >
                <Container>
                    {image && <Avatar source={image} /> }
                    <ProfileContainerList>
                        <ProfileTitle>{title} 님</ProfileTitle>
                        {subtitle && (
                            <ProfileSubTitle 
                                numberOfLines={1}
                            >
                                {subtitle}
                            </ProfileSubTitle>
                        )}
                    </ProfileContainerList>
                    <View style={{marginRight: 10}}>
                        <Ionicons name="ios-arrow-forward" size={24} color={themes.colors.gray} />
                    </View>
                </Container>
            </TouchableHighlight>
        </Swipeable>
    );
};

export const SingleItem = ({
    onPress, title, subTitle, icon
}) => {

    return (
        <TouchableHighlight
            underlayColor={themes.colors.view}
            onPress={onPress}
        >
                <SingleContainer>
                    <ProfileContainer>
                        <ProfileTitleList>
                            {title}
                        </ProfileTitleList>
                        {subTitle && <ProfileSubTitle>{subTitle}</ProfileSubTitle>}
                        <AntDesign 
                            name={icon}
                            size={22}
                            color={themes.colors.view}
                        />
                    </ProfileContainer>            
                </SingleContainer>
            
        </TouchableHighlight>
    );
}

export const ToggleList = ({
    title, subTitle, onPress, toggleSwitch, toggleValue, isEnabled
}) => {


    return (
        <TouchableHighlight
            underlayColor={themes.colors.view}
            onPress={onPress}
        >
            <SingleContainer>
                <ProfileContainer>
                    <ProfileTitle>
                        {title}
                    </ProfileTitle>
                    {subTitle && <ProfileSubTitle>{subTitle}</ProfileSubTitle>}
                </ProfileContainer>
                
                <Switch 
                    trackColor={{ false: 'black', true: '#fff'}}
                    thumbColor={isEnabled ? 'red' : 'blue'}
                    onValueChange={toggleSwitch}
                    value={toggleValue}
                /> 
            </SingleContainer>

             
        </TouchableHighlight>
    )
}