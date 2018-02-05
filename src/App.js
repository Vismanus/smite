import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { styles } from 'styles/common'
import reducers from './reducers'
import { Header, StatusBarBackground } from './components/common'
import TeamFlatList from './components/TeamFlatList'
import RegionSelect from './components/RegionSelect'

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1, backgroundColor: styles.colorPale }}>
      <StatusBarBackground />
      <Header headerText="Teams" />
      <TeamFlatList />
      <RegionSelect />
    </View>
  </Provider>
)

export default App
