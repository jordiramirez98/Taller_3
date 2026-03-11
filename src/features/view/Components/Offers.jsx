import React from 'react'
import { UseStatecolor } from '../hooks/useState'
import { UseContext } from '../hooks/useContext'
import { UseReducerList } from '../hooks/useReducer'
import { UseEffectCounter } from '../hooks/useEffect'
import {UseRefPreviousValue} from '../hooks/useRef'
import { StatusBar } from '../hooks/useOnlineStatus'

import { Box, Card, CardContent } from '@mui/material'

export const Offers = () => {
    return (
        <Box
            sx={{
                mt: 10,
                px: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
            }}
        >
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <UseStatecolor />
                </CardContent>
            </Card>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <UseContext />
                </CardContent>
            </Card>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <UseReducerList />
                </CardContent>
            </Card>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <UseEffectCounter />
                </CardContent>
            </Card>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <UseRefPreviousValue />
                </CardContent>
            </Card>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardContent>
                    <StatusBar />
                </CardContent>
            </Card>
        </Box>
    )
}