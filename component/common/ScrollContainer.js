import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, ActivityIndicator} from 'react-native';

const ScrollContainer = ({
    loading,
    children,
    contentContainerStyle
}) => {


    return (
        <ScrollView
            style={{backgroundColor: "white"}}
            contentContainerStyle={{
                flex: loading ? 1 : 0,
                justifyContent: loading ? "center" : "flex-start",
                ...contentContainerStyle
            }}
        >
            {loading ? <ActivityIndicator color="black" size="small" /> : children}           
        </ScrollView>
    );
};

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object    
};

export default ScrollContainer;

