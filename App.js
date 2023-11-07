import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import styles from './styles'
import JokeList from './components/JokeList'

export default function App() {
  return (
    <View style={styles.container}>
      <JokeList />
      <StatusBar style="auto" />
    </View>
  )
}
