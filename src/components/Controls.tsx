import { Button, Paper, TextField} from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { ChangeEvent } from "react"





interface Controlprops {
    pageNumber: number, 
    numPages: number, 
    setPageNumber: React.Dispatch<React.SetStateAction<number>>, 
    scale: number, 
    setScale: React.Dispatch<React.SetStateAction<number>>
}

const Controls = (controlProps: Controlprops): JSX.Element => {
    
    const { pageNumber, numPages, setPageNumber, scale, setScale } = controlProps



    const isFirstPage: boolean = pageNumber === 1 
    const isLastPage: boolean = pageNumber === numPages


    const firstPageClass = isFirstPage ? true : false
    const lastPageClass = isLastPage ? true  : false


    const goToFirstPage = (): void => {
        if (!isFirstPage) setPageNumber(1)
    }

    const goToPreviousPage = (): void => {
        if (!isFirstPage) setPageNumber( pageNumber - 1)
    }

    const goToNextPage = (): void => {
        if (!isLastPage) setPageNumber(pageNumber + 1)
    }

    const goToLastPage = (): void => {
        if (!isFirstPage) setPageNumber(numPages)
    }

    const onPageChange  = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget
        setPageNumber(Number(value))
    }

    const isMinZoom: boolean = scale < 0.6;
    const isMaxZoom: boolean = scale >= 2.0;

    
    const zoomOutClass = isMinZoom ? true : false;
    const zoomInClass = isMaxZoom ? true : false;


    const zoomOut = (): void => {
        if (!isMinZoom) setScale(scale - 0.1);
      };
    
      const zoomIn = (): void => {
        if (!isMaxZoom) setScale(scale + 0.1);
      };
    
    return (
        <Paper  sx={{
            padding: 1, 
            position: 'fixed', 
            zIndex: 50000

        }}>
            <Button onClick={goToFirstPage} disabled={firstPageClass}><KeyboardDoubleArrowLeftIcon /></Button>
            <Button onClick={goToPreviousPage} disabled={firstPageClass}><KeyboardArrowLeftIcon /></Button>
            <TextField name="pageNumber" value={pageNumber} onChange={onPageChange}   label="Outlined" variant="outlined" size="small"  /> of {pageNumber}
            <Button onClick={goToNextPage} disabled={lastPageClass}><KeyboardArrowRightIcon /></Button>
            <Button onClick={goToLastPage} disabled={lastPageClass}><KeyboardDoubleArrowRightIcon /></Button>
            <Button onClick={zoomIn} disabled={zoomInClass}><ZoomInIcon /></Button>
            <Button onClick={zoomOut} disabled={zoomOutClass}><ZoomOutIcon /></Button>

        </Paper>
    )
}


export default Controls