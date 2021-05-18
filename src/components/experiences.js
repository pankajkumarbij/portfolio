import React from 'react';
import { makeStyles, Card, CardContent, CardActions, Collapse, Button, Typography, List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Experiences() {
  const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
    	<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
		  	<Grid item xs={6}>
		      <img src="images/experiences.png" alt="experiences" width="500" height="500" />
		    </Grid>
		    <Grid item xs={6}>
				  <Card className={classes.formcard}>
				  	<Typography variant="h4" className={classes.name}>
				    	<u>Experiences</u>
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
				    	I have done an Internship in my 2nd year at analysed.in.
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
				    	I have contributed in many projects in 5+ open source programs.
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
				    	I am also project admin and mentor of my project Easy-Job-Intern in 2 open source programs.
						</Typography>
					</Card>
		    </Grid>
		  </Grid>
    	<Typography variant="h4" align="center">
    	<u>Experiences</u>
		</Typography>
    <Grid container spacing={2} className={classes.containergrid}>
	  		<Grid item xs={4}>
	  			<Card>
						<Typography variant="h5" className={classes.cardheader}>
							Web Development Internship
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Company: Analysed.in
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Mar-2020 to May-2020
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
								<img src="images/bootstrap1.png" alt="bootstrap1" width="20" height="20" />&nbsp;Bootstrap
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/php.png" alt="php" width="25" height="20" />&nbsp;PHP
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/mysql.png" alt="mysql" width="20" height="20" />&nbsp;MySQL
							</Button>
						</CardContent>
						<Divider/>
						<CardActions disableSpacing>
						  <Button variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>} href="https://github.com/pankajkumarbij/covid19-tracker">
								Certificate
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
										<ListItemText secondary="Worked on development of user interface of Analysed platform." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Worked for Frontend functionlities using HTML, CSS, JavaScript, and Bootstrap." />
									</ListItem>
									<Divider/>
									<ListItem>
										<ListItemText secondary="Worked for Backend and Database functionlities using PHP and MySQL." />
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
