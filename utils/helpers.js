import React from 'react'
import {View, StyleSheet, AsyncStorage} from 'react-native'
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'
import {Notifications, Permissions} from 'expo'

const NOTIFICATION_KEY = 'Flashcard:notification'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function getReminderValue () {
  return{
    today:"Don't forget to log your data today!!"
  }
}

export function clearLoacalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification(){
  return {
    title:'Log your stats!',
    body:"don't forget to log your stats for today! ",
    android:{
      sound:true,
      priority:'high',
      sticky:false,
      vibrate:true,
    }
  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationsAsync(createNotification(), {time:tomorrow, repeat:'day'})
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}