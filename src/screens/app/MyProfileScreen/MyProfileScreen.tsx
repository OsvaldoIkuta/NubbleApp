import React from 'react';

import { AppTabScreenProps } from 'src/routes/nativationType';

import { Screen, Text } from '@components';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
    return (
        <Screen>
            <Text preset="headingLarge">My Profile Screen</Text>
        </Screen>
    );
}
