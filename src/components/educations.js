import React from 'react';
import { makeStyles, Typography, Grid, Card, Button, Divider } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Education() {
  const classes = useStyles();

  return (
		<div className={classes.containers}>
			<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
				<Grid item xs={12} sm={6} align = "center" justify = "center">
					<img src="images/educations.png" alt="educations" className={classes.imgs}/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className={classes.formcard}>
						<Typography variant="h4" className={classes.name}>
							<u>Educations</u>
						</Typography>
						<br/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						I am pursuing my graduation from IIIT Manipur in Computer Science and Engineering Branch.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						I have learned the computer science core subjects in my collage curricular.
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Learned/Practice Some extra skills from youtube, educational websites or blogs and some training programs.
						</Typography>
					</div>
				</Grid>
			</Grid>
			<Typography variant="h4" align="center">
				<u>Educations</u>
			</Typography>
			<Card className={classes.card1}>
				<Grid container spacing={4} className={classes.containergrid}>
					<Grid item xs={12} sm={6} align = "center" justify = "center">
						<img src="images/iiitmanipur.png" alt="iiitmanipur" width="200" height="150" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h4" className={classes.names}>
						<u>Bachelor of Technology</u>
						</Typography>
						<Typography variant="h6" className={classes.name}>
						Indian Institute of Information Technology, Manipur
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Computer Science & Engineering
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						CGPA: 8.20
						</Typography>
						<Button variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
						Result
						</Button>
					</Grid>
				</Grid>
			</Card>
			<Card className={classes.card1}>
				<Grid container spacing={4} className={classes.containergrid}>
					<Grid item xs={12} sm={6} align = "center" justify = "center">
						<img src="images/rbse.jpg" alt="rbse" width="200" height="180" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h4" className={classes.names}>
						<u>Rajasthan Board of Education</u>
						</Typography>
						<Typography variant="h6" className={classes.name}>
						Swami Nityanand Sr. Sec. School, Danta (Sikar-RJ)
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Sinear Secondary and Secondary
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Sinear Secondary Percentage : 78.60%
						</Typography>
						<Divider/>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
						Secondary Percentage: 75.67%
						</Typography>
					</Grid>
				</Grid>
			</Card>
			<br/>
			<Typography variant="h5" align="center">
				<u>Certification/Trainings</u>
			</Typography>
			<Grid container spacing={3} className={classes.containergrid}>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/internshala.jpg" alt="internshala" width="200" height="150" />
						<Typography variant="h6" align="center">
						Machine Learning Training
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-Internshala
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
						</Button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/iitbombay.png" alt="iitbombay" width="150" height="150" />
						<Typography variant="h6" align="center">
						Spoken Tutorial on Python
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-IIT Bombay
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
						</Button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/hackerrank.png" alt="hackerrank" width="350" height="150" />
						<Typography variant="h6" align="center">
						C/C++ Hackerrank Certificate
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-Hackerrank
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
						</Button>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={3} className={classes.containergrid}>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/iitbombay.png" alt="iitbombay" width="150" height="150" />
						<Typography variant="h6" align="center">
						Spoken Tutorial on Latex
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-IIT Bombay
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
						</Button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/nptel.jpg" alt="nptel" width="250" height="150" />
						<Typography variant="h6" align="center">
						Introduction to Operating System
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-NPTEL: IIT Madras
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
						</Button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4} align = "center" justify = "center">
					<Card className={classes.card2}>
						<img src="images/linkedin.png" alt="linkedin" width="300" height="150" />
						<Typography variant="h6" align="center">
						Software Engineering Training
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
						-Linkedin
						</Typography>
						<Button variant="contained" color="secondary" size="medium" startIcon={<VisibilityIcon/>}>
							Certificate
						</Button>
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
card1: {
	margin: '3%',
	padding: '1%',
},
card2: {
	margin: '1%',
	padding: '2%',
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
name: {
	color: '#204a87',
	fontFamily: 'Roboto',
},
names: {
	color: '#204a87',
	paddingBottom: '1%',
	fontSize: '1.5rem',
	fontFamily: 'Roboto',
	'@media (min-width:600px)': {
		fontSize: '2rem',
	},
},
formcard: {
	padding: '3%',
}
}));
