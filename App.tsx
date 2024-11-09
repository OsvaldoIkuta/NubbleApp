import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold>
            Osvaldo: Eu te amoooo ❤️
          </Text>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button title="Primary" loading marginBottom="s12" />
          <Button title="Primary 2" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12"/>
          <Button disabled preset="outline" title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
