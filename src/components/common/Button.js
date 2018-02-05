import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from 'styles/common'

const buttonStyles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: styles.colorBlack,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: styles.colorYellow,
    margin: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: styles.colorYellow,
    fontSize: 16,
    fontWeight: styles.buttonTextWeight,
    paddingTop: 10,
    paddingBottom: 10
  }
}

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = buttonStyles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

export { Button }
