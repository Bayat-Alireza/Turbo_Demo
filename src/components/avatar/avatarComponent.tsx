import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { useStyles } from "../avatar/avatarStyle"

export default function VariantAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="rounded" className={classes.square}>
        ACC
      </Avatar>
      <Avatar variant="rounded" sizes="2px" className={classes.square}>
        CAL
      </Avatar>
      <Avatar variant="rounded" className={classes.square}>
        CNZ
      </Avatar>
      <Avatar variant="rounded" className={classes.rounded}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
}