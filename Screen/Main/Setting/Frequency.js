import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {View, SectionList, Text, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingSection from '../../../component/common/SettingSection';
import themes from '../../../config/themes';

const faqItems = [
    {
      title: '패스매니저가 무엇인가요?',
      category: '패스매니저란',
      data: [
        {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
      ],
    },
    {
        title: '패스매니저가 무엇인가요?',
        category: '패스매니저란',
        data: [
          {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
        ],
    },
    {
        title: '패스매니저가 무엇인가요?',
        category: '패스매니저란',
        data: [
          {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
        ],
    },
    {
        title: '패스매니저가 무엇인가요?',
        category: '서비스이용',
        data: [
            {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
        ],
    },
    {
        title: '패스매니저가 무엇인가요?',
        category: '서비스이용',
        data: [
          {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
        ],
      },
      {
          title: '패스매니저가 무엇인가요?',
          category: '2',
          data: [
            {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
          ],
      },
      {
          title: '패스매니저가 무엇인가요?',
          category: '2',
          data: [
            {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
          ],
      },
      {
          title: '패스매니저가 무엇인가요?',
          category: '3',
          data: [
              {desc: '패스매니저는 여러분의 수험 생활을 관리해주는 최전선 관리인입니다. 수험생활을 하는 데 있어 필요한 교육과정과 맞춤형 관리를 할 수 있도록 제공되는, 패스미 고유의 학습관리 서비스입니다.'}
          ],
      },
]

const Frequency = ({navigation}) => {
    const [active, setActive] = useState('패스매니저란');

    const tabs = ['패스매니저란', '서비스이용', '강의관련', '상담관련', '아웃소싱문의', '협업관련'];
    
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
            <ScrollView style={[styles.tabs]} horizontal={true}  >
                {tabs.map(tab => renderTab(tab))}
            </ScrollView>
            
            <>
                {active === '패스매니저란' ? (
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
        paddingHorizontal: 10
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