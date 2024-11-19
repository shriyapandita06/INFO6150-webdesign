// import { Box, Grid, Typography } from '@mui/material';

// export default () => {
//     return (
//         <Box 
//             className="fixed-bottom"
//             sx={{
//                 bgcolor:  '#57c7cb',
//                 width: 'auto',
//                 color: 'aliceblue',
//             }}
//         >
//             <Grid container justifyContent="center">
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Typography align="center" variant="body1">
//                         © 2024 JobSphere All Rights Reserved
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

import { Box, Grid, Typography } from '@mui/material';

export default () => {
    return (
        <Box 
            className="fixed-bottom"
            sx={{
                bgcolor: '#FFF8DC', // Pastel yellow background color
                width: 'auto',
                color: '#555555', // Text color for contrast
                padding: '10px', // Add padding for better spacing
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Typography 
                        align="center" 
                        variant="body1" 
                        sx={{ fontWeight: 'bold', fontSize: '0.9rem' }} // Slightly smaller, bold font
                    >
                        © 2024 JobSphere All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
