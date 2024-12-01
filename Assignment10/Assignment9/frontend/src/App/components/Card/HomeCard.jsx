import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Typography, Button, Box, Grid } from '@mui/material';

export default function HomePage() {
  const cardStyles = {
    flex: 1,
    backgroundColor: '#F2E5A2', // Slightly darker shade of pastel yellow
    height: 'auto',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={4} style={{ margin: 'auto', alignItems: 'center' }}>
        {/* Welcome to JobSphere Card */}
        <Grid item xs={12} md={6}>
          <Card style={cardStyles}>
            <Typography
              variant="h6" 
              gutterBottom
              align="center"
              sx={{
                fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' },
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Welcome to JobSphere!
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: '#555', marginBottom: '10px' }}
            >
              Your gateway to a world of exciting job opportunities. Discover your dream career with
              us. At JobSphere, we make job hunting simple, efficient, and tailored to your needs.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: '#555', marginBottom: '10px' }}
            >
              Whether you're a fresh graduate or an experienced professional, we connect you with
              leading companies in the data domain. With our easy-to-use platform, you’ll always be
              a step closer to your dream job.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: '#555' }}
            >
              JobSphere is here to bridge the gap between talent and
              opportunity, ensuring you find the perfect role.
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                href="/aboutus"
                variant="contained"
                sx={{
                  padding: '10px 20px',
                  backgroundColor: '#E3D392', // One shade darker yellow
                  '&:hover': {
                    backgroundColor: '#C8B86E',
                  },
                }}
              >
              
                Learn More
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* About JobSphere Card */}
        <Grid item xs={12} md={6}>
          <Card style={cardStyles}>
            <Typography
              variant="h6" // Further reduced font size
              gutterBottom
              align="center"
              sx={{
                fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' },
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              About JobSphere
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: '#555', marginBottom: '10px' }}
            >
              At JobSphere, we believe in connecting talent with opportunity. Whether you're a
              seasoned professional or just starting, we've got something for everyone.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{
                color: '#555',
                fontWeight: 'bold',
                textDecoration: 'underline',
                marginTop: '10px',
              }}
            >
              Available Roles:
            </Typography>
            <Typography
              variant="body2"
              align="center"
              paragraph
              sx={{ color: '#555', lineHeight: '1.5' }}
            >
              - Data Analyst <br />
              - Data Scientist <br />
              - Product Analyst <br />
              - Machine Learning Engineer <br />
              - Large Language Models (LLM) Expert
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              
              <Button
                href="/jobPosts"
                variant="contained"
                sx={{
                  padding: '10px 20px',
                  backgroundColor: '#E3D392', // One shade darker yellow
                  '&:hover': {
                    backgroundColor: '#C8B86E',
                  },
                }}
              >
                Browse Jobs
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}



// import React from 'react';
// import jobSearchImage from '../../../assets/jobsearch.png'; // Updated image import
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { Typography, Button, Box } from '@mui/material';

// export default function HomeCard() {

//   const rightSideStyles = {
//     flex: 1,
//     backgroundImage: `url(${jobSearchImage})`, // Updated image reference
//     backgroundPosition: 'right center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '100%',
//   };

//   return (
//     <Container style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
//       <Card variant='outlined' sx={{ margin: 'auto', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ 
//                           flex: 1, 
//                           padding: '40px', 
//                           display: 'flex', 
//                           flexDirection: 'column', 
//                           justifyContent: 'space-between', 
//                           background: `url(${jobSearchImage}) right center no-repeat fixed`, // Updated image reference
//                           backgroundSize: 'cover' 
//                         }}
//         >
//           <Card sx={{ backgroundColor: 'rgba(225,225,225,0.8)', height: '50%' , overflowX: 'auto', overflowY: 'auto' }}>
//             <div>
//               <Typography variant='h2' gutterBottom align="center" sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', xl: '5rem' } }}>Jobify Your Application!</Typography>
//               <Typography variant='body1' align="center" paragraph>
//                 <strong>Welcome to Your Next Career Move!</strong> Discover exciting job opportunities tailored to your skills and aspirations.
//               </Typography>
//               <Typography variant='body1' paragraph align="center">
//                 <strong>Featured Jobs</strong> Explore our featured jobs and take a step towards a fulfilling career:
//               </Typography>
//               <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//                 <li><Typography variant='body1'><strong>Software Engineer:</strong> Join a dynamic team working on cutting-edge technologies.</Typography></li>
//                 <li><Typography variant='body1'><strong>Marketing Specialist:</strong> Drive marketing strategies for innovative products.</Typography></li>
//                 <li><Typography variant='body1'><strong>UX/UI Designer:</strong> Shape user experiences and create visually stunning designs.</Typography></li>
//               </ul>
//             </div>
//             <div>
//               <Typography variant='body1' paragraph align="center">
//                 More questions? <a href="/contact">Contact us</a>
//               </Typography>
//               <Typography variant='h6' align="center">
//                 <strong>How It Works</strong>
//               </Typography>
//               <ol style={{ paddingLeft: 20 }}>
//                 <li><Typography variant='body1'><strong>Browse Jobs:</strong> Explore a variety of opportunities from different industries and locations.</Typography></li>
//                 <li><Typography variant='body1'><strong>Apply Online:</strong> Submit your application and resume directly through our user-friendly platform.</Typography></li>
//                 <li><Typography variant='body1'><strong>Get Hired:</strong> Connect with employers, attend interviews, and secure your dream job.</Typography></li>
//               </ol>
//               <Typography variant='h5' align="center">Your future starts here. Begin your job search now!</Typography>
//               <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                 <Button href="/jobPosts" variant="contained" color="primary" size="large">
//                   Search Jobs
//                 </Button>
//                 <br/>
//               </Box>
//             </div>
//           </Card>
//         </CardContent>
//       </Card>
//       <div style={rightSideStyles}></div>
//     </Container>
//   );
// }


// // import React from 'react';
// // import rightImage from '../../../assets/background.png';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import { Typography, Button, Box } from '@mui/material';

// // export default function HomeCard() {

// //   const rightSideStyles = {
// //     flex: 1,
// //     backgroundImage: `url(${rightImage})`,
// //     backgroundPosition: 'right center',
// //     backgroundRepeat: 'no-repeat',
// //     backgroundSize: 'cover',
// //     height: '100%',
// //   };

// //   return (
// //     <Container style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
// //       <Card variant='outlined' sx={{ margin: 'auto', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
// //         <CardContent sx={{ 
// //                           flex: 1, 
// //                           padding: '40px', 
// //                           display: 'flex', 
// //                           flexDirection: 'column', 
// //                           justifyContent: 'space-between', 
// //                           background: `url(${rightImage}) right center no-repeat fixed`,
// //                           backgroundSize: 'cover' 
// //                         }}
// //         >
// //       <Card sx={{ backgroundColor: 'rgba(225,225,225,0.8)', height: '50%' , overflowX: 'auto', overflowY: 'auto' }}>
// //           <div>
// //             <Typography variant='h2' gutterBottom align="center" sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', xl: '5rem' } }}>Jobify Your Application!</Typography>
// //             <Typography variant='body1' align="center" paragraph>
// //               <strong>Welcome to Your Next Career Move!</strong> Discover exciting job opportunities tailored to your skills and aspirations.
// //             </Typography>
// //             <Typography variant='body1' paragraph align="center">
// //               <strong>Featured Jobs</strong> Explore our featured jobs and take a step towards a fulfilling career:
// //             </Typography>
// //             <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
// //               <li><Typography variant='body1'><strong>Software Engineer:</strong> Join a dynamic team working on cutting-edge technologies.</Typography></li>
// //               <li><Typography variant='body1'><strong>Marketing Specialist:</strong> Drive marketing strategies for innovative products.</Typography></li>
// //               <li><Typography variant='body1'><strong>UX/UI Designer:</strong> Shape user experiences and create visually stunning designs.</Typography></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <Typography variant='body1' paragraph align="center">
// //               More questions? <a href="/contact">Contact us</a>
// //             </Typography>
// //             <Typography variant='h6' align="center">
// //               <strong>How It Works</strong>
// //             </Typography>
// //             <ol style={{ paddingLeft: 20 }}>
// //               <li><Typography variant='body1'><strong>Browse Jobs:</strong> Explore a variety of opportunities from different industries and locations.</Typography></li>
// //               <li><Typography variant='body1'><strong>Apply Online:</strong> Submit your application and resume directly through our user-friendly platform.</Typography></li>
// //               <li><Typography variant='body1'><strong>Get Hired:</strong> Connect with employers, attend interviews, and secure your dream job.</Typography></li>
// //             </ol>
// //             <Typography variant='h5' align="center">Your future starts here. Begin your job search now!</Typography>
// //             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
// //               <Button href="/jobPosts" variant="contained" color="primary" size="large">
// //                 Search Jobs
// //               </Button>
// //               <br/>
// //             </Box>
// //           </div>
// //           </Card>
// //         </CardContent>
// //       </Card>
// //       <div style={rightSideStyles}></div>
// //     </Container>
// //   );
// // }
