import { Box, FormControl, FormLabel, Slider, Stack } from '@mui/material';
import { useConfigurator } from '../context/Configurator';

export const Interface = () => {
  const { roofLength, setRoofLength, roofWidth, setRoofWidth } =
    useConfigurator();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        overflow: 'auto',
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Box className="container" p={3}>
          <FormControl>
            <FormLabel
              sx={{
                color: 'black',
              }}
            >
              Length
            </FormLabel>
            <Slider
              sx={{
                width: '200px',
              }}
              marks
              min={3}
              max={10}
              value={roofLength}
              onChange={(e) => setRoofLength(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        <Box className="container" p={3}>
          <FormControl>
            <FormLabel
              sx={{
                color: 'black',
              }}
            >
              Width
            </FormLabel>
            <Slider
              sx={{
                width: '200px',
              }}
              marks
              min={3}
              max={10}
              value={roofWidth}
              onChange={(e) => setRoofWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
