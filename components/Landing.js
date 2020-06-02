import React from 'react';
import { View } from "react-native"
import { Button } from 'react-native-elements';

const Landing = ({ handlePress }) => {
  return (
    <View>
      <Button
        title="Let's work out!"
        onPress={handlePress}
      />
    </View>
  );
};

export default Landing;
