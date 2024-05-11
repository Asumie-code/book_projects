import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PDialog from './BDialog'
import { useScaleAnimation } from "../util/animationHooks";
import { type allowComponentProp } from '../util/typeUtil';
import { animated } from '@react-spring/web';

const AnimatedCard: allowComponentProp<typeof Card> = animated(Card)


interface PCardProps {
  mainImage: string,
  projectTitle?: string,
  desc?: string,
  sourceCodeLink?: string,
  link?: string,
  imgs: { original: string }[],
  delay?: number
}

const BCard = ({ desc, imgs, link, sourceCodeLink, projectTitle = 'Default Title', mainImage, delay }: PCardProps): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>

      <AnimatedCard data-testid='pcard' sx={{ '&:hover': { boxShadow: '0px 0px 5px 5px  #2E4FF2' }, maxWidth: 345 }} style={useScaleAnimation(delay)}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="240"
            image={mainImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {projectTitle}
            </Typography>
          </CardContent>
        </CardActionArea >
      </AnimatedCard>
      <PDialog desc={desc} imgs={imgs} link={link} sourceCodeLink={sourceCodeLink} title={projectTitle} open={open} handleClose={handleClose} />
    </div>
  );
}


export default BCard; 