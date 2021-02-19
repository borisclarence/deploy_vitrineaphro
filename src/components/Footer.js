import { React } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
/*import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';*/

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Aphro-web
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    /*footer: {
      textAlign: 'center',
      padding: theme.spacing(0, 2, 3, 2),
      margin: 'auto',
      backgroundColor: 'darkblue',
      display: 'flex',
      flexFlow: 'row wrap',
      fontFamily: 'Roboto'
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: '#262626',
    },
    typography: {
        color: '#fff',
    },
    typographyList: {
      display: 'inline-block',
      marginLeft: 20,
      listStyle: 'none',

    },
    contacts: {
      textAlign: 'justify'
    }
    hr: {
      marginBottom: theme.spacing(2),
      marginBlockStart: 0,
      borderColor: theme.palette.secondary.main,
    },
      links: {
        marginTop: 10,
          color: theme.palette.secondary.main
      },
      link: {
        color: theme.palette.secondary.main
      }*/
      '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
      footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      },
  }));

  const footers = [
    {
      title: 'Aphro-Team',
      description: ['Based in Paris', '75015 Street', 'Kremlin-Bicêtre', 'Developpement Model'],
    },
    {
      title: 'Notre Prestation',
      description: ['Build Model', 'Send Stuff', 'Fix Price', 'Update functionality'],
    },
    {
      title: 'Contact',
      description: ['email@gmail.com', '+33-675653208', 'linkedIn.com', 'outlook.com'],
    },
    {
      title: 'Légal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

export default function Footer() {
    const classes = useStyles();
    return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    );
}
