import { StyleSheet, Text, View, ScrollView, FlatList, PixelRatio, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Story from './Story';
import Post from './Post';
import { useEffect, useState } from 'react';

const darkTheme = false

const stories = [
  { id: 0, username: 'Catalin', me: true },
  { id: 1, username: 'Ana', me: false },
  { id: 2, username: 'Dana', me: false },
  { id: 3, username: 'Valera', me: false },
  { id: 4, username: 'Alina', me: false },
  { id: 5, username: 'Madalina', me: false },
  { id: 6, username: 'Cristi', me: false },
  { id: 7, username: 'Dragos', me: false },
  { id: 8, username: 'Vanea', me: false }
]

const posts = [
  {
    id: '0',
    username: 'Catalin',
    location: 'Chisinau, r. Moldova',
    postId: 0,
    likes: 128,
    description: 'Duminică relaxantă în oraș ☀️',
    comments: [
      {
        title: "Prieteni",
        data: [
          { username: 'Catalin', text: "Esti frumoasa"}
        ]
      },
      {
        title: "Alti utilizatori",
        data: [
          { username: 'Valoghia', text: "Hai sa ne vedem"}
        ]
      }
    ]
  },
  {
    id: '1',
    username: 'Ana',
    location: '',
    postId: 1,
    likes: 342,
    description: '',
    comments: [
      {
        title: "Prieteni",
        data: []
      },
      {
        title: "Alti utilizatori",
        data: []
      }
    ]
  },
  {
    id: '2',
    username: 'Dana',
    location: 'Bălți, r. Moldova',
    postId: 2,
    likes: 87,
    description: 'Cafea bună și vreme frumoasă ☕',
    comments: [
      {
        title: "Prieteni",
        data: []
      },
      {
        title: "Alti utilizatori",
        data: []
      }
    ]
  },
];

console.log('densitate:', PixelRatio.get());
const grosimeLinie = 1 / PixelRatio.get();

export default function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={ darkTheme ? {flex: 1, backgroundColor: '#121212' } : {flex: 1}} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <View>
            <Text style={ darkTheme ? styles.headerTextDark : styles.headerText }>Instagram</Text>
          </View>
          <View style={styles.headerEmojis}>
            <Text style={ darkTheme ? styles.headerTextDark : styles.headerText }>♡</Text>
            <Text style={ darkTheme ? styles.headerTextDark : styles.headerText }>➤</Text>
          </View>
        </View>
        {isLoading ? <ActivityIndicator size={"large"}/> : <FlatList 
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={( {item} ) => <Post darkTheme={darkTheme} {...item} />}
          ListHeaderComponent={
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer} contentContainerStyle={styles.stories}>
              {stories.map((user) => {
                return <Story key={user.id} username={user.username} isMyself={user.id === 0 ? true : false} darkTheme={darkTheme}></Story>
              })}
            </ScrollView>
          }
          ItemSeparatorComponent={
            <View style={{ height: grosimeLinie, backgroundColor: '#ccc'}}></View>
          }
        />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  headerTextDark: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  headerEmojis: {
    flexDirection: 'row',
    gap: 15
  },
  storiesContainer: {
    flexGrow: 0
  },
  stories: {
    paddingHorizontal: 12,
    gap: 16,
    justifyContent: 'space-evenly'
  }
});
