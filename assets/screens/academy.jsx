import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, FlatList, Alert, View, SafeAreaView, BackHandler,  useColorScheme, ScrollView} from 'react-native';

import { lightColors, darkColors } from './colors/colorsPalettes.jsx';
import { Subtitle, Title, TopicList} from '../components/index.jsx';
import topics from '../components/topics.jsx';


const App = ({navigation}) => {
  const colorScheme = useColorScheme();
  const palette = colorScheme === 'dark' ? darkColors : lightColors;
  const [filteredTopics, setFilteredTopis] = useState(topics);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: palette.primary,
      width: '100%',
    },
    content: {
      width: '85%',
      alignSelf: 'center',
      
    },
    item: {
      padding: 10,
      marginVertical: 8,
      backgroundColor: palette.primary,
      font: palette.primary,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}> 
        <Title palette={palette} text="Academy"/>
        <Subtitle palette={palette} text="Index: "/>
        <TopicList topics={filteredTopics} navigation={navigation}/>
    </View>
  );
};

export default App;