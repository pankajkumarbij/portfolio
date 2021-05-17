import React from 'react';
import { makeStyles, Typography, Button, Grid, IconButton } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function Home() {
  const classes = useStyles();

  return (
    <div>
		  <Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
		    <Grid item xs={6}>
		    	<Typography variant="h4" className={classes.name}>
		      	Pankaj Kumar Bijarniya
					</Typography>
					<Typography variant="h5" className={classes.name}>
		      	(pankajkumarbij)
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	I am currently pursuing B.tech from IIIT Manipur in Computer Science and Engineering Branch.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	I am iterested in Full-Stack Web and Mobile App development using tranding technologies and tools as well as traditional tools.
					</Typography>
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
					<Button variant="contained" color="primary" size="large" startIcon={<CloudDownloadIcon/>}>
						Resume
					</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button variant="contained" color="secondary" size="large" startIcon={<EmojiPeopleIcon/>}>
						Hire Me
					</Button>
		    </Grid>
		    <Grid item xs={6}>
		      <img src="images/home.png" alt="home" width="500" height="500" />
		    </Grid>
		  </Grid>
      <Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
		    <Grid item xs={6}>
		      <img src="images/full-stack.png" alt="full-stack" width="500" height="500" />
		    </Grid>
		    <Grid item xs={6}>
		    	<Typography variant="h4" className={classes.name}>
		      	<u>Full Stack Developer</u>
					</Typography>
					<br/>
					<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
						<img src="images/c.png" alt="c" width="25" height="25" />&nbsp;C/C++
					</Button>
					<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
						<img src="images/html5.png" alt="html" width="23" height="20" />&nbsp;HTML
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/css3.png" alt="css" width="20" height="20" />&nbsp;CSS
					</Button>
					<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
						<img src="images/js.png" alt="javascript" width="23" height="20" />&nbsp;JavaScript
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/react.png" alt="react" width="25" height="20" />&nbsp;React
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/bootstrap1.png" alt="bootstrap1" width="20" height="20" />&nbsp;Bootstrap
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/matrialui.png" alt="Matrialui" width="20" height="20" />&nbsp;Matrial-UI
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/react.png" alt="react" width="25" height="20" />&nbsp;React-Native
					</Button>
					<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
						<img src="images/node.png" alt="node" width="20" height="20" />&nbsp;Node.js
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/express.png" alt="express" width="35" height="20" />Express
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/php.png" alt="php" width="25" height="20" />&nbsp;PHP
					</Button>
					<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
						<img src="images/firebase.png" alt="firebase" width="20" height="20" />&nbsp;Firebase
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/mongodb.png" alt="mongodb" width="25" height="20" />&nbsp;MongoDB
					</Button>
					<Button variant="outlined" color="primary" size="large" className={classes.skill}>
						<img src="images/mysql.png" alt="mysql" width="20" height="20" />&nbsp;MySQL
					</Button>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	Building resposive website frontend using different different tools like React.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	Developing mobile applications frontend using React-Native.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	Creating Website and Mobile application backend using different different tools like Node, Express, PHP and Firebase.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	Manage Database of Website and Mobile application using different different tools like MongoDB, MySQL, Postgresql and Firebase etc.
					</Typography>
		    </Grid>
		  </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  containergrid: {
  	padding: '3%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
  	color: '#204a87',
  },
  introduction: {
  	marginTop: '2%',
  },
  socialicon: {
  	fontSize: 40,
  },
  What: {
  	
  },
  skill: {
  	margin: '1%',
  }
}));
