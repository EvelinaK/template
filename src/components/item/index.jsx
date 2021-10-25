import { withStyles } from '@material-ui/core/styles'

import { buttonStyles as styles } from './styles'
import Button from '@mui/material/Button';

const CustomButton = ({ classes }) => {
    return <Button className={classes.button}>Button</Button>
}

export default withStyles(styles)(CustomButton);
