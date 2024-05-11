import Typography from '@mui/material/Typography'
import { animated, useSpring } from '@react-spring/web'

export type typographyProps = Parameters< typeof Typography> 
export type useSpringProps = Parameters< typeof useSpring>


// type to allow the use of MUI component prop
export type allowComponentProp<muiComponentType> = ReturnType<typeof animated> | muiComponentType