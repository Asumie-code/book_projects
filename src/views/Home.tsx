import { Paper, Typography, } from "@mui/material";
import Box from "@mui/material/Box"

import useMediaQuery from '@mui/material/useMediaQuery';














const Home = (): JSX.Element => {


   
 

    const screen_700 = useMediaQuery('(max-width: 700px)')
    const screen_1290 = useMediaQuery('(max-width: 1290px)')

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        px: screen_700? 4 : 5,
                        py: 6,
                        width: screen_1290 ? 1 : 0.6,
                        mb: 1,
                    },
                    backgroundColor: 'transparent',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        px: 0,
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}
                >
                     <Typography
                        variant='h1'
                        component='h1'
                        sx={{
                            color: 'black', 
                            fontSize: (screen_700 ? '2.3rem' : '5.2rem'),
                            fontWeight: 400,
                            '& > span': {
                                fontSize: (screen_700 ? '2.3rem' : '5.2rem'),
                                fontWeight: 400,
                                lineHeight: '0'
                            }
                        }}
                    >books</Typography>

                </Paper>
            </Box>

        </>
    )
}



export default Home; 