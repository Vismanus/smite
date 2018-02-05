import React from 'react'
import { View } from 'react-native'

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
)

export { CardSection }
