import React from 'react'
import { View, Platform } from 'react-native'

const styles = {
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 20 : 0
  }
}

const StatusBarBackground = ({ style }) => (
  <View style={[styles.statusBarBackground, style]} />
)

export { StatusBarBackground }
