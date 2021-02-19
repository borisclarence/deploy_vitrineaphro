import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TabIcon from '@material-ui/icons/Tab';
import ShareIcon from '@material-ui/icons/Share';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    width: '98vw',
    //padding: '6px 16px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: '1rem'
  },
  contents: {
    margin: 150,
  }
}));

const StepMobile = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography component="h3" variant="body2" color="textSecondary">
            Comment utiliser notre application?
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GroupIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 1
            </Typography>
            <Typography>Connexion à l'application.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 2
            </Typography>
            <Typography>Cliquer sur un objet et placer le sur les polygon.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <AutorenewIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 3
            </Typography>
            <Typography>Utiliser le plus et moins pour rotate. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <SettingsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 4
            </Typography>
            <Typography>Cliquer sur le bouton violet pour accéder au settings</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </div>
  );
}

const BodyTutorial = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography component="h3" variant="body2" color="textSecondary">
            Comment utiliser notre application?
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GroupIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 1
            </Typography>
            <Typography>Cliquez sur le bouton pour aller sur la page des groupes.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <GroupAddIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 2
            </Typography>
            <Typography>Cliquez sur l'icone plus pour ajouter un nouveau groupe.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CardMembershipIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 3
            </Typography>
            <Typography>Cliquez sur le card pour aller dans les details du groupe.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <PersonAddIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 4
            </Typography>
            <Typography>Cliquez sur le bouton en haut à droite pour ajouter un nouveau membre.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineSeparator>
        <TimelineDot>
          <TabIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 5: Objets tab
            </Typography>
            <Typography>Cliquez sur le tab pour voir comment partager les objets avec un groupe.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Etape 6: Cliquer sur le bouton sélection pour importer un objet.
            </Typography>
            <Typography>
                Un fichier a été chargé, maintenant tous les membres du groupes peuvent utiliser cet objet.
                Maintenant vous pouvez aller sur la page objets pour gérer vos objets.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </div>
  );
}

const SimpleAccordion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Tutoriel Application web</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BodyTutorial />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Tutoriel Application mobile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <StepMobile />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Tutorial() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <p>
        <SimpleAccordion />
        {/*<BodyTutorial />*/}
        {/*<myTabList/>*/}
      </p>
      <Footer />
    </div>
  );
}
