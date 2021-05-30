import React from 'react';
import { makeStyles, Typography, Button, Grid, IconButton, TextField, Card } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SendIcon from '@material-ui/icons/Send';

export default function Contact() {
  const classes = useStyles();

  return (
		<div className={classes.containers}>
			<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
				<Grid tem xs={12} sm={6} align="center" justify="center">
					<img src="images/address1.png" alt="address" className={classes.imgs} />
				</Grid>
				<Grid tem xs={12} sm={6}>
					<Card className={classes.formcard}>
						<Typography variant="h4" className={classes.name}>
						<u>Contact Me</u>
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						I am available on almost every social media. You can message me, I will reply within 24 hours. 
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
						<Typography variant="h6" className={classes.name}>
						<u>Home Address</u>
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						<i>Village: NayaBas, Post: Dudhawa, District: Sikar<br/> State: Rajasthan, Country: India, Pin Code: 332406</i>
						</Typography>
						<br/>
						<Button variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
							See Resume
						</Button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button variant="contained" color="secondary" size="medium" startIcon={<MyLocationIcon/>}>
							Google Map
						</Button>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
				<Grid tem xs={12} sm={6} align="center" justify="center">
					<img src="images/contact.png" alt="contact" className={classes.imgs} />
				</Grid>
				<Grid tem xs={12} sm={6}>
					<Typography variant="h4" className={classes.names}>
					<u>Send Me Email Message</u>
					</Typography>
					<Card className={classes.formcard}>
						<form noValidate autoComplete="off">
							<TextField id="outlined-basic" label="Email" variant="outlined" className={classes.formfields}/><br/><br/>
							<TextField id="outlined-basic" label="Subject" variant="outlined" className={classes.formfields}/><br/><br/>
							<TextField
							id="outlined-multiline-static"
							label="Message"
							multiline
							rows={4}
							variant="outlined"
							className={classes.formfields}
						/><br/><br/>
						<Button variant="contained" color="primary" size="large" className={classes.formfields} startIcon={<SendIcon/>}>
								Send Message
							</Button>
						</form>
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
	justifyContent: "center"
},
imgs: {
	width: '90%',
	'@media (min-width:600px)': {
		width: '75%',
	},
},
names: {
	color: '#204a87',
	padding: '1%',
	fontSize: '1.5rem',
	'@media (min-width:600px)': {
		fontSize: '2rem',
	},
},
name: {
	color: '#204a87',
},
introduction: {
	padding: '1%',
	fontSize: '1.2rem',
	'@media (min-width:600px)': {
		fontSize: '1.3rem',
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
	margin: '2%',
	padding: '3%',
},
formfields: {
	width: '100%',
}
}));