import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {View, SectionList, Text, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingSection from '../../../component/common/SettingSection';
import themes from '../../../config/themes';

const faqItems = [
    {
      title: '패스매니저가 무엇인가요?',
      category: '입문',
      data: [
        {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
      ],
    },
    {
        title: '패스매니저는 어떻게 구성되어 있나요?',
        category: '입문',
        data: [
          {desc: '패스매니저는 NCS/PSAT을 중심으로, 각종 적성검사 문제풀이 역량을 강화시키기 위한 커리큘럼으로 구성되어 있습니다. 크게 기초모듈이론, 기출문제분석, 실전연습으로 구분합니다.'}
        ],
    },
    {
        title: 'NCS는 무엇인가요?',
        category: '입문',
        data: [
          {desc: 'NCS는 공기업 직무적성 검사로, 공기업 시험을 구성하고 있는 시험체계입니다. 구체적으로는 복잡하게 나뉘겠지만, 의사소통/수리능력/문제해결능력을 포함한 총 10개 과목으로 구성되어 있습니다. 자세한 내용은 영상을 확인해주시기 바랍니다.'}
        ],
    },
    {
        title: 'PSAT는 무엇인가요?',
        category: '입문',
        data: [
            {desc: 'PSAT는 공직 직무적성 검사로, 공무원 시험의 1차 시험으로 구성된 적성검사 시험체계입니다. 언어논리, 자료해석, 상황판단으로 구성되어 있습니다. '}
        ],
    },
    {
        title: '구독했을 때의 혜택은 무엇인가요?',
        category: '서비스이용',
        data: [
          {desc: '패스미를 구독하면, 패스미에서 제공되는 모든 서비스를 이용할 수 있습니다. 온라인으로 제공되는 영상과 pdf로 제공되는 모든 파일들의 이용권한, 상담권을 받게 됩니다.'}
        ],
    }
]

const Frequency = ({navigation}) => {
    const [active, setActive] = useState('입문');

    const tabs = ['입문', '서비스이용', '강의관련', '상담관련', '아웃소싱문의', '협업관련'];
    
    const renderTab = (tab) => {
        const isActive = active === tab;
    
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => handleTab(tab)}
                style={[styles.tab, isActive ? styles.active : null]}

            >
                <Text style={{paddingBottom: 10}}>
                    {tab}
                </Text>
            </TouchableOpacity>
        )
    }

    const handleTab = tab => {
        setActive(tab)
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <ScrollView 
                style={[styles.tabs]} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
            >
                {tabs.map(tab => renderTab(tab))}
            </ScrollView>
            
            <>
                {active === '입문' ? (
                    <SectionList
                        
                        showsVerticalScrollIndicator={false}
                        sections={faqItems}
                        renderSectionHeader={({section}) => (
                            <SettingSection 
                                
                                title={section.title}
                            />
                        )}
                        renderItem={({item}) => (
                            <View
                                style={styles.Answer}
                            > 
                                <View>
                                    <Text>{item.desc}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    /> 
                ) : (null)}
                {active === '서비스이용' ? (
                    <SectionList 
                    showsVerticalScrollIndicator={false}
                    sections={faqItems}
                    renderSectionHeader={({section}) => (
                        <SettingSection 
                            title={section.title}
                        />
                    )}
                    renderItem={({item}) => (
                        <View
                            style={styles.Answer}
                        > 
                            <View>
                                <Text>{item.desc}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index}
                /> 
                ) : (null)}
            </>

            {/* <SectionList 
                sections={faqItems}
                renderSectionHeader={({section}) => (
                    <SettingSection 
                        title={section.title}
                    />
                )}
                renderItem={({item}) => (
                    <View
                        style={styles.Answer}
                    > 
                        <View>
                            <Text>{item.desc}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index}
            /> */}
        </SafeAreaView>
    );
};

export default Frequency;


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: themes.colors.main,
        paddingHorizontal: 10,
    },
    Question: {
        // height: 30,
        // fontSize: 16,
        // fontWeight: 'bold',
        // color: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    Answer: {
        alignItems: 'flex-start',
        fontSize: 14,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    active: {
        borderBottomColor: 'gray',
        borderBottomWidth: 3
    },
    tab: {
        marginRight: 20,
        paddingVertical: 15
    },
    tabs: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
})