import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TeamDetail from './TeamDetail'

// eslint-disable-next-line react/prefer-stateless-function
class TeamFlatList extends Component {
  keyExtractor = (item, index) => index

  filterRegion(item) {
    if (item.region === this.props.region) {
      return <TeamDetail team={item} />
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.teams}
        extraData={this.props.region}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => (
          this.filterRegion(item)
        )}
      />
    )
  }
}

const mapStateToProps = state => ({ teams: state.teams, region: state.region })

export default connect(mapStateToProps)(TeamFlatList)
