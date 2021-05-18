import React from 'react';
import { makeStyles, Card, CardContent, CardActions, Collapse, Button, Typography, List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import clsx from 'clsx';
import GitHub from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

	const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  
  return (
  	<>
  	<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
    	<Grid item xs={6}>
        <img src="images/projects.png" alt="projects" width="500" height="500" />
      </Grid>
      <Grid item xs={6}>
      	<Card className={classes.formcard}>
			  	<Typography variant="h4" className={classes.name}>
			    	<u>Projects</u>
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
			    	I have developed some projects related to Web Development and Mobile App Development.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
			    	I have developed all type of work in projects related to frontend, backend and databse.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
			    	I have developed all web based projects in MERN Stack or LAMP Stack and Mobile App related projects in React-Native and Firebase.
					</Typography>
				</Card>
	    </Grid>
	  </Grid>
	  <Typography variant="h4" align="center">
    	<u>Projects</u>
		</Typography>
    <Grid container spacing={2} className={classes.containergrid}>
	  		<Grid item xs={4}>
	  			<Card>
						<Typography variant="h5" className={classes.cardheader}>
							COVID-19 Tracker
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Team Size: 2
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Jul-2020 to Aug-2020
						</Typography>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/mongodb.png" alt="mongodb" width="25" height="20" />&nbsp;MongoDB
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/api.png" alt="api" width="20" height="20" />&nbsp;API
							</Button>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/node.png" alt="node" width="20" height="20" />&nbsp;Node.js
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/express.png" alt="express" width="35" height="20" />Express
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/bootstrap1.png" alt="bootstrap" width="20" height="20" />&nbsp;Bootstrap
							</Button>
						</CardContent>
						<Divider/>
						<CardActions disableSpacing>
						  <Button variant="contained" color="primary" size="medium" startIcon={<GitHub/>} href="https://github.com/pankajkumarbij/covid19-tracker">
								Github
							</Button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" color="secondary" size="medium" startIcon={<LanguageIcon/>} href="https://indiancovid19tracker.herokuapp.com">
								Website
							</Button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" size="medium" onClick={handleExpandClick}>
								<ExpandMoreIcon className={clsx(classes.expand, {
						      [classes.expandOpen]: expanded,
						    })}/> 
						    More
							</Button>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
						  <CardContent>
						  	<List component="nav" aria-label="secondary mailbox folders">
									<ListItem>
										<ListItemText secondary="In this project, COVID-19 API is calling with the help of Node.js." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Display data with the help of charts or graphs." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Display confirmed total cases, active cases, recovered and deaths." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="It Shows all type of data for all countries with states, and districts data." />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
					</Card>
	      </Grid>
	      <Grid item xs={4}>
	  			<Card>
						<Typography variant="h5" className={classes.cardheader}>
							Online SQL IDE/Code Editor
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Team Size: 1
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Mar-2020 to Apr-2020
						</Typography>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/html5.png" alt="html" width="23" height="20" />&nbsp;HTML
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/css3.png" alt="css" width="20" height="20" />&nbsp;CSS
							</Button>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/js.png" alt="javascript" width="23" height="20" />&nbsp;JavaScript
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/jquery.png" alt="jquery" width="25" height="20" />&nbsp;Jquery
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/php.png" alt="php" width="25" height="20" />&nbsp;PHP
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/mysql.png" alt="mysql" width="20" height="20" />&nbsp;MySQL
							</Button>
						</CardContent>
						<CardActions disableSpacing>
						  <Button variant="contained" color="primary" size="medium" startIcon={<GitHub/>} href="https://github.com/pankajkumarbij/syntax-highlighter-and-auto-completion-for-sql">
								Github
							</Button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" color="secondary" size="medium" startIcon={<LanguageIcon/>}>
								Website
							</Button>
						  &nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" size="medium" onClick={handleExpandClick2}>
								<ExpandMoreIcon className={clsx(classes.expand, {
						      [classes.expandOpen]: expanded2,
						    })}/> 
						    More
							</Button>
						</CardActions>
						<Collapse in={expanded2} timeout="auto" unmountOnExit>
						  <CardContent>
						  	<List component="nav" aria-label="secondary mailbox folders">
									<ListItem>
										<ListItemText secondary="In this project, We can use this online IDE for writing SQL code." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="This online IDE have the syntax highlighter and auto-completion facilities." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="This project is useful for SQL programmer to time-saving and reduce errors." />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
					</Card>
	      </Grid>
	      <Grid item xs={4}>
	  			<Card>
	  				<Typography variant="h5" className={classes.cardheader}>
							Exam/Quiz Mobile App
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Team Size: 1
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Mar-2021 to Apr-2021
						</Typography>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/react.png" alt="react" width="25" height="20" />&nbsp;React-Native
							</Button>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/firebase.png" alt="firebase" width="20" height="20" />&nbsp;Firebase
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/reactnativepaper.jpeg" alt="reactnativepaper" width="20" height="20" />&nbsp;React-Native-Paper
							</Button>
						</CardContent>
						<CardActions disableSpacing>
						  <Button variant="contained" color="primary" size="medium" startIcon={<GitHub/>} href="https://github.com/pankajkumarbij/Exam-Quiz-Application">
								Github
							</Button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" color="secondary" size="medium" startIcon={<LanguageIcon/>}>
								App
							</Button>
						  &nbsp;&nbsp;&nbsp;&nbsp;
							<Button variant="contained" size="medium" onClick={handleExpandClick3}>
								<ExpandMoreIcon className={clsx(classes.expand, {
						      [classes.expandOpen]: expanded3,
						    })}/> 
						    More
							</Button>
						</CardActions>
						<Collapse in={expanded3} timeout="auto" unmountOnExit>
						  <CardContent>
						  	<List component="nav" aria-label="secondary mailbox folders">
									<ListItem>
										<ListItemText secondary="The main motive of this project is to make it easy for students to practice their skills." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Experts can create here different types of quizzes based on their subjects." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Students can see a list of quizzes then attempt quiz accordingly." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="After finished the quiz students can see their results at the same moment." />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
					</Card>
	      </Grid>
	    </Grid>
	    </>
  );
}

const useStyles = makeStyles((theme) => ({
  containergrid: {
  	padding: '3%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardheader:{
  	padding: '3%',
  	background: 'linear-gradient(45deg, #ff00cc, #3e1ae6)',
  	color: 'white',
  	fontWeight: 900,
  },
  cardsubheader:{
  	fontWeight: 900,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  introduction: {
  	marginTop: '2%',
  },
  name: {
  	color: '#204a87',
  },
  skill: {
  	margin: '1%',
  },
  formcard: {
  	padding: '3%',
  }
}));

