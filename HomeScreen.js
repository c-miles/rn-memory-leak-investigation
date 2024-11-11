import React, { useState, useContext, createContext } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';

const AppContext = createContext();

export default function HomeScreen() {
  const [value, setValue] = useState(0);
  const animation = React.useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  return (
    <AppContext.Provider value={{ value, setValue }}>
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
        <Button title="Animate" onPress={startAnimation} />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'blue', marginBottom: 20 },
});
