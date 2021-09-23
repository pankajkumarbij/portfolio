import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import HistoryIcon from '@material-ui/icons/History';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

const useStyles = makeStyles(() => ({
header: {
    paddingRight: "4%",
    paddingLeft: "4%",
    "@media (max-width: 900px)": {
    	paddingLeft: 0,
    },
},
logo: {
    fontWeight: 900,
    fontFamily: 'Bonheur Royale',
    fontStyle: 'italic',
    textAlign: "left",
},
buttons: {
	fontWeight: 600,
},
toolbar: {
    display: "flex",
    justifyContent: "space-between",
},
drawerContainer: {
    padding: "20px 30px",
},
}));

export default function Header() {
    const classes = useStyles();
    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false)
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
			<Toolbar className={classes.toolbar}>
				{logo}
				{getMenuButtons()}
			</Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setDrawerOpen(true);
        const handleDrawerClose = () => setDrawerOpen(false);

        return (
            <Toolbar>
                <IconButton onClick={handleDrawerOpen} color="primary">
                    <MenuIcon />
                </IconButton>
                <Drawer open={drawerOpen} anchor="left" onClose={handleDrawerClose}>
                    <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                <div>{logo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return (
            <div>
                <Button color="primary" className={classes.buttons} startIcon={<HomeOutlinedIcon/>}><Link to='/'>Home</Link></Button><br></br><br></br>
				<Button color="primary" className={classes.buttons} startIcon={<BuildOutlinedIcon/>}><Link to='/skills'>Skills</Link></Button><br></br><br></br>
				<Button color="primary" className={classes.buttons} startIcon={<MenuBookIcon/>}><Link to='/educations'>Education</Link></Button><br></br><br></br>
				<Button color="primary" className={classes.buttons} startIcon={<HistoryIcon/>}><Link to='/experiences'>Experience</Link></Button><br></br><br></br>
				<Button color="primary" className={classes.buttons} startIcon={<WorkOutlineOutlinedIcon/>}><Link to='/projects'>Projects</Link></Button><br></br><br></br>
				<Button color="primary" className={classes.buttons} startIcon={<ContactPhoneOutlinedIcon/>}><Link to='/contactme'>Contact Me</Link></Button><br></br><br></br>
            </div>
        );
    };

    const logo = (
        <Typography variant="h5" component="h1" color="primary" className={classes.logo}>
            PANKAJKUMARBIJ
        </Typography>
    );

    const getMenuButtons = () => {
        return (
            <div>
                <Button color="primary" className={classes.buttons} startIcon={<HomeOutlinedIcon/>}><Link to='/'>Home</Link></Button>
				<Button color="primary" className={classes.buttons} startIcon={<BuildOutlinedIcon/>}><Link to='/skills'>Skills</Link></Button>
				<Button color="primary" className={classes.buttons} startIcon={<MenuBookIcon/>}><Link to='/educations'>Education</Link></Button>
				<Button color="primary" className={classes.buttons} startIcon={<HistoryIcon/>}><Link to='/experiences'>Experience</Link></Button>
				<Button color="primary" className={classes.buttons} startIcon={<WorkOutlineOutlinedIcon/>}><Link to='/projects'>Projects</Link></Button>
				<Button color="primary" className={classes.buttons} startIcon={<ContactPhoneOutlinedIcon/>}><Link to='/contactme'>Contact Me</Link></Button>
            </div>
        );
    };

    return (
        <header>
            <AppBar className={classes.header} color="inherit">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}