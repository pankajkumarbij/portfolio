import React from 'react';
import { makeStyles, Typography, Grid, Card, Button } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Education() {
  const classes = useStyles();

  return (
    <div>
    	<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
		  	<Grid item xs={6}>
		      <img src="images/educations.png" alt="educations" width="500" height="500" />
		    </Grid>
		    <Grid item xs={6}>
		    	<Typography variant="h4" className={classes.name}>
		      	<u>Educations</u>
					</Typography>
					<br/>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	I am pursuing my graduation from IIIT Manipur in Computer Science and Engineering Branch.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	I have learned the computer science core subjects in my collage curricular.
					</Typography>
					<Typography variant="h6" className={classes.introduction} color="textSecondary">
		      	Learned/Practice Some extra skills from youtube, educational websites or blogs and some training programs.
					</Typography>
		    </Grid>
		  </Grid>
		  <Typography variant="h4" align="center">
      	<u>Educations</u>
			</Typography>
    	<Card className={classes.card1}>
		  	<Grid container spacing={4} className={classes.containergrid}>
		  		<Grid item xs={6}>
		        <img src="images/iiitmanipur.png" alt="iiitmanipur" width="200" height="150" />
		      </Grid>
		      <Grid item xs={6}>
							<Typography variant="h4" className={classes.name}>
		          	Bachelor of Technology
		    			</Typography>
		    			<Typography variant="h6" className={classes.name}>
		          	Indian Institute of Information Technology, Manipur
		    			</Typography>
		    			<Typography variant="h6" color="textSecondary">
		          	Computer Science & Engineering
		    			</Typography>
		    			<Typography variant="h6" color="textSecondary">
		          	CGPA: 8.20
		    			</Typography>
		    			<Button variant="contained" color="primary" size="medium" startIcon={<CloudDownloadIcon/>}>
								Result
							</Button>
		      </Grid>
		    </Grid>
      </Card>
      <Card className={classes.card1}>
		  	<Grid container spacing={4} className={classes.containergrid}>
		  		<Grid item xs={6}>
		        <img src="images/rbse.jpg" alt="rbse" width="200" height="180" />
		      </Grid>
		      <Grid item xs={6}>
							<Typography variant="h4" className={classes.name}>
		          	Rajasthan Board of Education
		    			</Typography>
		    			<Typography variant="h6" className={classes.name}>
		          	Swami Nityanand Sr. Sec. School, Danta (Sikar-RJ)
		    			</Typography>
		    			<Typography variant="h6" color="textSecondary">
		          	10th and 12th class
		    			</Typography>
		    			<Typography variant="h6" color="textSecondary">
		          	Percentage: 12th : 78.60% and 10th: 75.67%
		    			</Typography>
		    			<Button variant="contained" color="primary" size="medium" startIcon={<CloudDownloadIcon/>}>
								Result
							</Button>
		      </Grid>
		    </Grid>
      </Card>
      <br/>
      <Typography variant="h4" align="center">
      	<u>Certification/Trainigns/Workshops</u>
			</Typography>
			<Grid container spacing={3} className={classes.containergrid}>
	  		<Grid item xs={4}>
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
	      <Grid item xs={4}>
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
	      <Grid item xs={4}>
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
	  		<Grid item xs={4}>
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
	      <Grid item xs={4}>
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
	      <Grid item xs={4}>
	  			<Card className={classes.card2}>
	        <img src="images/linkedin.png" alt="linkedin" width="400" height="150" />
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
  containergrid: {
  	paddingTop: '2%',
  	paddingLeft: '3%',
  	paddingRight: '3%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  card1: {
  	width: '80%',
  	marginTop: '2%',
  	marginLeft: '10%',
  	padding: '1%',
  },
  card2: {
  	padding: '2%',
  },
  introduction: {
  	marginTop: '2%',
  },
  name: {
  	color: '#204a87',
  },
}));
