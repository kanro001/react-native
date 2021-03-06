/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  Image,
  SwipeableFlatList,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
} = ReactNative;

const RNTesterPage = require('./RNTesterPage');

import type {RNTesterProps} from 'RNTesterTypes';

const data = [
  {
    key: 'like',
    icon: require('./Thumbnails/like.png'),
    data: 'Like!',
  },
  {
    key: 'heart',
    icon: require('./Thumbnails/heart.png'),
    data: 'Heart!',
  },
  {
    key: 'party',
    icon: require('./Thumbnails/party.png'),
    data: 'Party!',
  },
];

class SwipeableFlatListExample extends React.Component<RNTesterProps> {
  render() {
    return (
      <RNTesterPage
        title={this.props.navigator ? null : '<SwipeableFlatList>'}
        noSpacer={true}
        noScroll={true}>
        <SwipeableFlatList
          data={data}
          bounceFirstRowOnMount={true}
          maxSwipeDistance={160}
          renderItem={this._renderItem.bind(this)}
          renderQuickActions={this._renderQuickActions.bind(this)}
        />
      </RNTesterPage>
    );
  }

  _renderItem({item}): ?React.Element<any> {
    return (
      <View style={styles.row}>
        <Image style={styles.rowIcon} source={item.icon} />
        <View style={styles.rowData}>
          <Text style={styles.rowDataText}>{item.data}</Text>
        </View>
      </View>
    );
  }

  _renderQuickActions({item}: Object): ?React.Element<any> {
    return (
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  rowData: {
    flex: 1,
  },
  rowDataText: {
    fontSize: 24,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
  },
});

exports.title = '<SwipeableFlatList>';
exports.description = 'Performant, scrollable, swipeable list of data.';
exports.examples = [
  {
    title: 'Simple swipable list',
    render: function(): React.Element<typeof SwipeableFlatListExample> {
      return <SwipeableFlatListExample />;
    },
  },
];
