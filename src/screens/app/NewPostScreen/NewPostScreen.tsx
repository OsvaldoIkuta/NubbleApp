import React from 'react';

import { AppTabScreenProps } from 'src/routes/nativationType';

import { Screen, Text } from '@components';

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
    return (
        <Screen>
            <Text preset="headingLarge">New Post Screen</Text>
        </Screen>
    );
}
