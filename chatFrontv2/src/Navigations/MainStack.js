import React from 'react';
import navigationStrings from '../constatns/navigationStrings';
import TabRoutes from './TabsRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
        </>
    )
}