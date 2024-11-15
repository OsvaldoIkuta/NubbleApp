import React from 'react';

import { AppTabScreenProps } from 'src/routes/nativationType';

import { Button, Screen, Text } from '@components';


export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button onPress={() => navigation.navigate('SettingsScreen')} preset="primary" title="Go to Setting Screen"/>
        </Screen>
    );
}
