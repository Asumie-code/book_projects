import { Button, Paper, TextField} from "@mui/material"
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


    const firstPageClass = isFirstPage ? 'disabled': 'clickable'
    const lastPageClass = isLastPage ? 'disabled' : 'clickable'


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

    
    const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
    const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';


    const zoomOut = (): void => {
        if (!isMinZoom) setScale(scale - 0.1);
      };
    
      const zoomIn = (): void => {
        if (!isMaxZoom) setScale(scale + 0.1);
      };
    
    return (
        <Paper>
            <Button onClick={goToFirstPage}>gottofirstpage</Button>
            <Button onClick={goToPreviousPage}>gottopreviouspage</Button>
            <TextField name="pageNumber" value={pageNumber} onChange={onPageChange}   label="Outlined" variant="outlined"  /> of {pageNumber}
            <Button onClick={goToNextPage}>gottonextpage</Button>
            <Button onClick={goToLastPage}>gottolastpage</Button>
            <Button onClick={zoomIn}>zoomin</Button>
            <Button onClick={zoomOut}>zoomout</Button>


        </Paper>
    )
}


export default Controls