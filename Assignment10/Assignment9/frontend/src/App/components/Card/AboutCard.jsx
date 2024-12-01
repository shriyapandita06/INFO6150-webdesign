import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import hiring from '../../../assets/hiringp.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function AboutCard({ personInfo }) {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '70px', paddingX: '20px' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              backgroundColor: '#F2E5A2', // Updated to pastel yellow
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Learn More About JobSphere
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '10px' }}
            >
              JobSphere is your go-to platform for exploring exceptional opportunities in the data
              domain. We specialize in connecting data professionals with top-tier roles in fields
              like data science, analytics, engineering, and AI development.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '10px' }}
            >
              Founded in September 2020 amidst the pandemic, JobSphere has grown rapidly to meet the
              increasing demand for data-driven talent. Over the last few years, we’ve enabled
              countless businesses to connect with the right talent, ensuring successful data
              transformations.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.875rem', lineHeight: 1.6 }}
            >
              Today, JobSphere proudly operates with a team of 48 dedicated professionals across 10
              countries. We work tirelessly to make job-seeking seamless and efficient, serving a
              community of over 5 million annual visitors.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={hiring}
              alt="We are hiring"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Meet Our Team Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              padding: '20px',
              backgroundColor: '#F2E5A2', // Updated to pastel yellow
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginTop: '20px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '15px',
                textAlign: 'center',
              }}
            >
              Meet Our Team
            </Typography>
            <ImageList
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
              }}
            >
              {personInfo.map((item) => (
                <ImageListItem
                  key={item.id}
                  sx={{
                    width: { xs: '40%', sm: '30%', md: '20%' },
                    marginBottom: '10px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      borderRadius: '8px',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={item.description}
                    actionIcon={
                      <IconButton sx={{ color: 'white' }}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}



// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';
// import hiring from '../../../assets/hiring.png';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// export default function AboutCard({ personInfo }) {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} sx={{ marginTop: '30px' }}>
//         <Grid item xs={12} md={8}>
//           <Typography variant='h4' sx={{ textAlign: 'left' }}>
//             <strong>
//               Learn more about Jobify. The fastest and most affordable solution for posting your
//               jobs to hundreds of job boards.
//             </strong>
//           </Typography>
//           <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>
            
//               Betterteam was founded in February 2016 and publicly launched in July 2016. Since then
//               our clients have posted over 1 million jobs, received over 40 million candidates, and
//               made millions of new hires.

//           </Typography>
//           <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>  

//               We have now grown to 79 employees located in 12 different countries. The Betterteam
//               website receives over 30 million unique visitors per year making it one of the top HR
//               sites globally.
          
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <img src={hiring} height='auto' width='100%' alt='We are hiring' />
//         </Grid>
//         <Grid item xs={12}>
//           <strong><Typography variant='h5' sx={{ textAlign: 'left' }}>MEET OUR TEAM</Typography></strong>
//           <p />
//         </Grid>
//       </Grid>
//       <Box>
//         <ImageList sx={{ width: '100%', height: 300,
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-around',
//           '& > li': {
//             width: { xs: '45%', sm: '30%', md: '22%', lg: '15%', xl: '12%' },
//             marginBottom: 16,
//           },
//        }} gap={4}
//        >
//           {personInfo.map((item) => (
//             <ImageListItem key={item.id}>
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 height='100px'
//               />
//               <ImageListItemBar
//                 title={item.name}
//                 subtitle={item.description}
//                 actionIcon={
//                   <IconButton
//                     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                     aria-label={`info about ${item.title}`}
//                   >
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//     </Box>
//   );
// }
