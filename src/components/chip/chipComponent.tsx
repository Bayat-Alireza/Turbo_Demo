import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import { useStyles } from "./chipStyle"


type ChipType = { transactions: string[] }

export default function SmallOutlinedChips(props: ChipType) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      {props.transactions.map((t, idx) => {
        return (
          <Chip
            variant="outlined"
            size="small"
            key={`{idx}_${t}`}
            // avatar={<Avatar><DoneIcon /></Avatar>}
            label={t}
            clickable
            icon={<DoneIcon />}
            color="primary"
          // onDelete={handleDelete}
          // deleteIcon={<DoneIcon />}
          />
        )
      })}
      {/* <Chip
        variant="outlined"
        size="small"
        // avatar={<Avatar><DoneIcon /></Avatar>}
        label="ACC"
        clickable
        icon={<DoneIcon />}
        color="primary"
      // onDelete={handleDelete}
      // deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>C</Avatar>}
        label="CAL"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>D</Avatar>}
        label="DAS"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>C</Avatar>}
        label="CNZ"
        disabled
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>L</Avatar>}
        label="LMI"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>V</Avatar>}
        label="VAL"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>S</Avatar>}
        label="SVC"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      /> */}

    </div>
  );
}
