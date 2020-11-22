/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TaskScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.cardView}>
        <View style={styles.subcardView1}>
          <View
            style={{
              ...styles.subView,
              backgroundColor: '#fff',
              borderBottomStartRadius: 30,
            }}>
            <View style={styles.boxStyle} />
            <Text style={styles.text1}>Name</Text>
            <View style={styles.boxStyle} />
          </View>
        </View>

        <View style={styles.subcardView2}>
          <View
            style={{
              ...styles.subView,
              backgroundColor: '#F5F5F5',
              borderTopEndRadius: 30,
            }}>
            <Text style={styles.text2}>Balance</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1C22',
  },
  cardView: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '60%',
    height: '25%',
    overflow: 'hidden',
  },
  subcardView1: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '50%',
  },
  subcardView2: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
  },
  boxStyle: {
    backgroundColor: '#0F1C22',
    width: '15%',
    height: '30%',
    borderRadius: 5,
  },
  text1: {color: '#0F1C22', fontSize: 16},
  text2: {color: '#0F1C22', fontSize: 18},
  subView: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
