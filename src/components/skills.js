import React from 'react';
import { makeStyles, Card, CardContent, Button, Typography, Divider, Grid } from '@material-ui/core';

export default function Experiences() {
  const classes = useStyles();
  
  return (
    <div className={classes.containers}>
    	<Grid container spacing={4} className={classes.containergrid} alignItems="center" justify="center">
			<Grid tem xs={12} sm={6} align = "center" justify = "center">
				<img src="images/frontend.png" alt="frontend" className={classes.imgs} />
			</Grid>
	  		<Grid tem xs={12} sm={6}>
	  			<Card className={classes.formcard}>
					<Typography variant="h5" className={classes.cardheader}>
						Frontend Skills
					</Typography>
					<Divider/>
					<CardContent>
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
						<Button variant="outlined" color="primary" size="large" className={classes.skill}>
							<img src="images/reactnativepaper.jpeg" alt="reactnativepaper" width="20" height="20" />&nbsp;React-Native-Paper
						</Button>
					</CardContent>
				</Card>
			</Grid>
	    </Grid>
	    <Grid container spacing={4} className={classes.containergrid} alignItems="center" justify="center">
	  		<Grid tem xs={12} sm={6} align = "center" justify = "center">
	  			<img src="images/backend.png" alt="backend" className={classes.imgs} />
			</Grid>
			<Grid tem xs={12} sm={6}>
				<Card className={classes.formcard}>
					<Typography variant="h5" className={classes.cardheader}>
						Backend and Database Skills
					</Typography>
					<Divider/>
					<CardContent>
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
						<Button variant="outlined" color="primary" size="large" className={classes.skill}>
							<img src="images/postgresql.png" alt="postgresql" width="20" height="20" />&nbsp;PostgreSQL
						</Button>
					</CardContent>
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
cardheader:{
	padding: '3%',
	background: 'linear-gradient(45deg, #ff00cc, #3e1ae6)',
	color: 'white',
	fontWeight: 900,
},
imgs: {
	width: '90%',
	'@media (min-width:600px)': {
		width: '75%',
	},
},
name: {
	color: '#204a87',
},
skill: {
	margin: '1%',
},
formcard: {
	marginLeft: '3%',
	marginRight: '3%',
}
}));
