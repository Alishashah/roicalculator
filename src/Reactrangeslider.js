import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const Reactrangeslider = () => {
      const [val, setVal] = React.useState(10);
      const handleChange = (_,newValue) => {
        setVal(newValue);
      };
  return (
    <div>



    <Box sx={{ width: 250 }}>
      <Slider
        step={1000}
        value={val}
        valueLabelDisplay="auto"
        min={10000}
        max={100000}
        onChange={handleChange}

      />
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: 'pointer' }}
        >
          {MIN} min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: 'pointer' }}
        >
          {MAX} max
        </Typography>
      </Box> */}
    </Box>
     </div>
  )
}

export default Reactrangeslider