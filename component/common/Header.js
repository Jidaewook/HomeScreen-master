import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text, theme, NavBar} from 'galio-framework';
import {withNavigation} from '@react-navigation/compat';

const Header = ({transparent}) => {
    
    const renderRight = () => {
        <View>
            <Text>
                MENU
            </Text>
        </View>
    }

    const renderHeader = ({search, options, tabs}) => {
        if(search || tabs || options) {
            return (
                <Block center>
                    <Text>
                        Search
                    </Text>
                </Block>
            )
        }
    }

    
    const HeaderStyles = [
        styles.shadow,
        transparent ? {backgroundColor: 'rgba(0,0,0,0)'} : null
    ]

    const navbarStyles = [
        styles.navbar,
        {backgroundColor: 'white'}
    ]

    return (
        <Block style={HeaderStyles}>
            <NavBar 
                back={false}
                title={'PassME NCS'}
                style={navbarStyles}
                transparent={transparent}
                right={renderRight}
                rightStyle={{alignItem: 'center'}}
                titleStyle={[
                    styles.title,
                    // {color: 'white'},
                    // // titleColor && {color: 'black'}
                ]}
                // {...props}
            />
            {renderHeader}
        </Block>
    );
};

export default withNavigation(Header);

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 3
    },
    navbar: {
        paddingVertical: 0,
        paddingBottom: theme.SIZES.BASE * 1.5,
        paddingTop: theme.SIZES.BASE,
        zIndex: 5
    },
    title: {
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold'
    }
})