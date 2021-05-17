import React from 'react';
import { makeStyles, AppBar, Toolbar, Button } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import HistoryIcon from '@material-ui/icons/History';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

export default function Appbar() {
  const classes = useStyles();

  return (
	  <>
	    <AppBar position="static" color="link" className={classes.appbar}>
	      <Toolbar align="center">
	        <Button color="primary" className={classes.buttons} startIcon={<HomeOutlinedIcon/>} href="/">Home</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<BuildOutlinedIcon/>} href="/skills">Skills</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<MenuBookIcon/>} href="/educations">Education</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<HistoryIcon/>} href="/experiences">Experience</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<WorkOutlineOutlinedIcon/>} href="/projects">Projects</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<GitHubIcon/>} href="/opensource">Open Source</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<ContactPhoneOutlinedIcon/>} href="/contactme">Contact Me</Button>
	      </Toolbar>
	    </AppBar>
	  </>
  );
}

const useStyles = makeStyles((theme) => ({
	appbar: {
		//background: 'linear-gradient(45deg, #ddd6f3, #faaca8)',
	},
  buttons: {
  	flexGrow: 1,
    fontWeight: 900,
  },
}));
