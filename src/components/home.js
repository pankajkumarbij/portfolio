import React from 'react';
import { makeStyles, Typography, Button, Grid, IconButton, Card, Divider } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function Home() {
  const classes = useStyles();

  return (
		<div className={classes.containers}>
			<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
				<Grid item xs={12} sm={6} align = "center" justify = "center">
				<img src="images/home.png" alt="home" className={classes.imgs}/>
				</Grid>
				<Grid item xs={12} sm={6} align = "center" justify = "center">
					<Card className={classes.formcard}>
						<Typography variant="h4" className={classes.name} align="left">
							<u>Pankaj Kumar Bijarniya</u>
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary" align = "left">
						I am currently pursuing B.tech from IIIT Manipur in Computer Science and Engineering Branch.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary" align = "left">
						I am iterested in Full-Stack Web and Mobile App development using tranding technologies and tools as well as traditional tools.
						</Typography>
						<Divider/>
						<IconButton aria-label="facebook" color="primary">
							<Facebook className={classes.socialicon} color="primary"/>
						</IconButton>
						<IconButton aria-label="facebook" color="secondary">
							<Instagram className={classes.socialicon}/>
						</IconButton>
						<IconButton aria-label="github">
							<GitHub className={classes.socialicon}/>
						</IconButton>
						<IconButton aria-label="linkedin" color="primary">
							<LinkedIn className={classes.socialicon} />
						</IconButton>
						<IconButton aria-label="youtube" color="secondary">
							<YouTube className={classes.socialicon}/>
						</IconButton>
						<IconButton aria-label="twitter" color="primary">
							<Twitter className={classes.socialicon}/>
						</IconButton>
						<br/>
						<Button variant="contained" color="primary" size="large" startIcon={<VisibilityIcon/>}>
							Resume
						</Button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button variant="contained" color="secondary" size="large" startIcon={<EmojiPeopleIcon/>}>
							Hire Me
						</Button>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
				<Grid item xs={12} sm={6} align = "center" justify = "center">
				<img src="images/full-stack.png" alt="full-stack" className={classes.imgs}/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card className={classes.formcard}>
						<Typography variant="h4" className={classes.name}>
							<u>Full Stack Developer</u>
						</Typography>
						<br/>
						<Button variant="outlined" color="secondary" size="medium" className={classes.skill}>
							<img src="images/c.png" alt="c" width="25" height="25" />&nbsp;C/C++
						</Button>
						<Button variant="outlined" color="secondary" size="medium" className={classes.skill}>
							<img src="images/html5.png" alt="html" width="23" height="20" />&nbsp;HTML
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/css3.png" alt="css" width="20" height="20" />&nbsp;CSS
						</Button>
						<Button variant="outlined" color="secondary" size="medium" className={classes.skill}>
							<img src="images/js.png" alt="javascript" width="23" height="20" />&nbsp;JavaScript
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/react.png" alt="react" width="25" height="20" />&nbsp;React
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/bootstrap1.png" alt="bootstrap1" width="20" height="20" />&nbsp;Bootstrap
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/matrialui.png" alt="Matrialui" width="20" height="20" />&nbsp;Matrial-UI
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/react.png" alt="react" width="25" height="20" />&nbsp;React-Native
						</Button>
						<Button variant="outlined" color="secondary" size="medium" className={classes.skill}>
							<img src="images/node.png" alt="node" width="20" height="20" />&nbsp;Node.js
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/express.png" alt="express" width="35" height="20" />Express
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/php.png" alt="php" width="25" height="20" />&nbsp;PHP
						</Button>
						<Button variant="outlined" color="secondary" size="medium" className={classes.skill}>
							<img src="images/firebase.png" alt="firebase" width="20" height="20" />&nbsp;Firebase
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/mongodb.png" alt="mongodb" width="25" height="20" />&nbsp;MongoDB
						</Button>
						<Button variant="outlined" color="primary" size="medium" className={classes.skill}>
							<img src="images/mysql.png" alt="mysql" width="20" height="20" />&nbsp;MySQL
						</Button>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Building resposive website frontend using different different tools like React.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Developing mobile applications frontend using React-Native.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Creating Website and Mobile application backend using different different tools like Node, Express, PHP and Firebase.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Manage Database of Website and Mobile application using different different tools like MongoDB, MySQL, Postgresql and Firebase etc.
						</Typography>
					</Card>
				</Grid>
			</Grid>
		</div>
  	);
}

const useStyles = makeStyles((theme) => ({
containers: {
	marginTop: '20%',
	'@media (min-width:600px)': {
		marginTop: '5%',
	},
},
containergrid: {
	padding: '3%',
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
},
name: {
	color: '#204a87',
	fontFamily: 'Roboto',
},
introduction: {
	padding: '1%',
	fontSize: '1.2rem',
	fontFamily: 'Roboto',
	'@media (min-width:600px)': {
		fontSize: '1.3rem',
	},
},
imgs: {
	width: '90%',
	'@media (min-width:600px)': {
		width: '75%',
	},
},
socialicon: {
	fontSize: '1.8rem',
	'@media (min-width:600px)': {
		fontSize: '2.4rem',
	},
},
skill: {
	margin: '1%',
},
formcard: {
	padding: '3%',
}
}));
