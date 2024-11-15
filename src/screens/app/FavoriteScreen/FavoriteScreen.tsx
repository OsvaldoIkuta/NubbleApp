import React from 'react';

import { AppTabScreenProps } from 'src/routes/nativationType';

import { Screen, Text } from '@components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
    return (
        <Screen>
            <Text preset="headingLarge">Favorite Screen</Text>
        </Screen>
    );
}
