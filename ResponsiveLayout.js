import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const ResponsiveLayout = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, width > height ? styles.horizontalLayout : styles.verticalLayout]}>
      <Text>Responsive Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLayout: {
    flexDirection: 'row',
  },
  verticalLayout: {
    flexDirection: 'column',
  },
});

export default ResponsiveLayout;
