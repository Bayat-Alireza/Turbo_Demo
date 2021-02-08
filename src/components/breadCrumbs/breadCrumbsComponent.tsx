import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import { useStyles } from "./breadCrumbsStyle"

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.', event.target);
}

interface BreadCrumbsType {
  pathSections: string[] | undefined
}

export default function IconBreadcrumbs(props: BreadCrumbsType) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e)}
        separator={<ArrowForwardIosIcon
          className={classes.icon} />}
        aria-label="breadcrumb">
        {props.pathSections?.map((section, idx) => {
          return (<Typography color="textSecondary" key={idx} className={classes.link}>
            {section}
          </Typography>)
        })}

        {/* <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
          Package
      </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}

        >
          Content
      </Link>
        <Typography color="textPrimary" className={classes.leafLink}>
          Application
      </Typography> */}
      </Breadcrumbs>
    </div>

  );
}
