import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ImgHomeFile from '../assets/smartphone-app.png';
import Divider from '@material-ui/core/Divider';
import samuel from '../assets/samuel.png'
import boris from '../assets/boris.png'
import sullivan from '../assets/sullivan.png'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import AboutPic  from "../assets/ondesk.jpg";

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    flexWrap: 'wrap',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '50.25%', // 16:9
    height: '75%',
    width: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  formroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      /*justifyContent: 'center',
      alignItems: 'center',*/
    },
  },
}));

const cards = [1, 2];



const BodyHome = () => {

  const classes = useStyles();

  return (
    <main>
        <div className={classes.heroContent} style={{ backgroundColor: "lightblue", }}>
          <Container maxWidth="sm">

            <Grid container spacing={4} >
              <Grid item xs={12} sm={5} >
                <img src={ImgHomeFile} alt="HomePicture" style={{width: '12vw', }} />
              </Grid>
              <Grid item xs={12} sm={7} >
                <Typography component="h1" variant="h4" align="justify" color="textPrimary" style={{width: '20vw',}} gutterBottom>
                  Bienvenue sur Afro
                </Typography>
                <Typography variant="h6" align="justify" color="textSecondary" style={{width: '40vw', }} paragraph>
                  {/*Aphro est la première application de placements de meubles depuis votre téléphone*/}
                  Aphro est une application AR permettant la création de decoration d'intérieur et le partage de ces dernière grâce à une web app.
                  Il permet ainsi aux agents immobiliers, particuliers ou decorateurs d'intérieurs de partager leur vision d'un nouvel environement.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center" style={{width: '35vw', }}>
                    <Grid item>
                      <Button variant="contained" color="primary">
                       Aller sur Playstore
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Consulter notre application
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>

          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">

          <Grid id="about">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" style={{width: '18vw', margin: 'auto'}} gutterBottom>
              A Propos
            </Typography>
            <Typography style={{marginLeft: '44%', marginTop: '3%', marginBottom: '3%', fontWeight: 'bold', width: '12%', justifyContent: 'center', borderBottom: '2px solid black'}}></Typography>

            <Grid container spacing={4}>

                <Grid item xs={12} sm={6} md={6}>
                  <img src={AboutPic} alt="HomePicture" style={{width: '28vw', borderRadius: '1%'}} />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <Typography style={{ marginTop: '7%', marginLeft: '7%', }}>
                    Beaucoup d'entre nous ce sont déjà posés la question comment décorer sa maison correctement, sans pour autant déplacer physiquement ses meubles.
                    Voilà pourquoi nous avons créé Afro. Il s'agit d'une solution de suggestion d'ameublement créée par une équipe d'ingénieurs professionnels, issus de l'école Epitech Paris.
                    Nous nous projettons sur un marché de niche en trois ans et nous sommes convaincus que nous allons réussir à motiver les gens à utiliser l'application.
                  </Typography>
                </Grid>

            </Grid>
          </Grid>

          <Divider style={{marginTop: '5%'}}/>

          <Grid style={{marginTop: '5%'}}>

            <Typography component="h1" variant="h4" align="center" color="textPrimary" style={{width: '18vw', margin: 'auto'}} gutterBottom>
              Notre Equipe
            </Typography>
            <Typography style={{marginLeft: '42%', marginTop: '3%', marginBottom: '3%', fontWeight: 'bold', width: '15%', justifyContent: 'center', borderBottom: '2px solid black'}}></Typography>

            <Grid container spacing={4}>


                <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={samuel}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Samuel Diop
                      </Typography>
                      <Typography>
                        Développeur AR/Mobile
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        <LinkedInIcon/>
                      </Button>
                      <Button size="small" color="primary">
                        <FacebookIcon/>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={boris}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Boris Clarence
                      </Typography>
                      <Typography>
                        Développeur web et Mobile
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <LinkedInIcon/>
                      </Button>
                      <Button size="small" color="primary">
                        <FacebookIcon/>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={sullivan}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sullivan verdan
                      </Typography>
                      <Typography>
                        Développeur web et mobile
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        <LinkedInIcon/>
                      </Button>
                      <Button size="small" color="primary">
                        <FacebookIcon/>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>


            </Grid>
          </Grid>

          <Divider style={{marginTop: '5%'}}/>

          <Grid style={{marginTop: '5%'}}>

            <Typography component="h1" variant="h4" align="center" color="textPrimary" style={{width: '18vw', margin: 'auto'}} gutterBottom>
              Contact
            </Typography>
            <Typography style={{marginLeft: '45%', marginTop: '3%', marginBottom: '3%', fontWeight: 'bold', width: '10%', justifyContent: 'center', borderBottom: '2px solid black'}}></Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Nom"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Prénom"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Adresse"
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Sujet"
                  fullWidth
                  autoComplete="shipping address-line2"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Contenu"
                  fullWidth
                  autoComplete="shipping address-line2"
                />
              </Grid>
              <Grid item xs={4}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Envoyer
                  </Button>
              </Grid>
            </Grid>

          </Grid>


        </Container>
    </main>
  );
}

export default function Home() {
  return (
    <div className="">
      <Header />
        <BodyHome/>
      <Footer />
    </div>
  );
}
