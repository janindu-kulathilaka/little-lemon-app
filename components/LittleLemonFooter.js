import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#F4CE14',
        bottom: 0,
        width: '100%',
      }}
    >
      <Text
        style={{
          padding: 20,
          color: 'black',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
