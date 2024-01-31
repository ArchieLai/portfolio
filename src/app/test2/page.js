'use client';

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{position: 'relative',left: '500px', borderRadius: 0}}>
      <Box 
        aria-describedby={id} 
        variant="contained" 
        onMouseOver={handleClick}
        style={{width: '500px', height: '50px', background: 'white', borderRadius: 0, zIndex: 1}}
      >Open PopoverOpen PopoverOpen PopoverOpen PopoverOpen PopoverOpen PopoverOpen PopoverOpen PopoverOpen Popover</Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '0px',
            background: 'rgba(255, 0, 0, 0.5)',
            zIndex: 3,
            boxShadow: 0
          },
        }}
      >
        <Box onMouseLeave={handleClose} sx={{ p: 2, width: '500px', height: '50px', padding: 0, margin: 0}} >The content of the Popover.</Box>
      </Popover>
    </div>
  );
}