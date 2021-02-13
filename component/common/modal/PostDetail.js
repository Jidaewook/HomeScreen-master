import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import themes from '../../../config/themes';

const {height} = Dimensions.get("window");

const PostDetail = ({visible, close, complete}) => {

    const refRBSheet = useRef();

    return (
    <>
    </>
        // <Modal
        //     animationType="slide"
        //     visible={visible}
        //     onRequestClose={close}
        // >

        //     <RBSheet
        //         ref={refRBSheet}
        //         height={height/3.5}
        //         closeOnDragDown={true}
        //         closeOnPressMask={true}
        //         customStyles={{
        //             wrapper: {
        //                 backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        
        //             },
        //             draggableIcon: {
        //                 backgroundColor: themes.colors.main,
                        
        //             },
        //             container: {
        //                 borderTopLeftRadius: 5,
        //                 borderTopRightRadius: 5,
        //                 paddingHorizontal: 10
        //             }
        //         }}
        //     >
        //         <View>
        //             <Text>
        //                 Modal
        //             </Text>
                   
        //         </View>
        //     </RBSheet>
            
        // </Modal>
    );
};

export default PostDetail;