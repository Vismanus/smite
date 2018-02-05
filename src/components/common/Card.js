import React from 'react'
import { View } from 'react-native'
import { styles } from 'styles/common'

const cardStyles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: styles.colorBlack,
    // borderBottomWidth: 0,
    shadowColor: styles.colorWhite,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

const Card = props => (
  <View style={[cardStyles.containerStyle, props.style]}>{props.children}</View>
)

export { Card }
