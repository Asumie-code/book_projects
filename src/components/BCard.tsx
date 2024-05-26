
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useScaleAnimation } from "../util/animationHooks";
import { type allowComponentProp } from '../util/typeUtil';
import { animated } from '@react-spring/web';
import { useNavigate } from "react-router-dom";

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

const BCard = ({projectTitle = 'Default Title', mainImage, delay }: PCardProps): JSX.Element => {

const navigate = useNavigate()

  return (
    <div>

      <AnimatedCard data-testid='pcard' sx={{ '&:hover': { boxShadow: '0px 0px 5px 5px  #2E4FF2' }, maxWidth: 345 }} style={useScaleAnimation(delay)}>
        <CardActionArea onClick={() => {navigate('/pdf/assets/math.pdf?url')}}>
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
    </div>
  );
}


export default BCard; 