import { StyleSheet, Text, View } from 'react-native';

import TabViewExample from './TabView';

export default function App() {
  return (
    <TabViewExample/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 250, 1)'
  },
});
