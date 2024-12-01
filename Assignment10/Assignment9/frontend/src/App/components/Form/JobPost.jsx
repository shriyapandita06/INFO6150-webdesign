

// import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { Avatar, ListItemAvatar, Typography } from '@mui/material';
// import WorkIcon from '@mui/icons-material/Work';
// import { Box } from '@mui/material';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import axios from 'axios';

// export default ({ jobPosts }) => {
//   const deleteJob = async (companyName, jobTitle) => {
//     console.log('console stuff', companyName, jobTitle);
//     const response = await axios.delete('http://localhost:3000/delete/jobs', {
//       data: { companyname: companyName, jobtitle: jobTitle },
//     });
//     console.log(response);
//   };

//   return (
//     <div>
//       {console.log(jobPosts)}
//       <List
//         sx={{
//           marginTop: '50px',
//         }}
//       >
//         {jobPosts &&
//           jobPosts.map((job) => (
//             <Box
//               key={job._id}
//               sx={{
//                 flexGrow: 1,
//                 maxWidth: 752,
//                 backgroundColor: '#F2E5A2', // Pastel Yellow
//                 borderRadius: '10px',
//                 marginBottom: '15px',
//                 padding: '20px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <ListItem alignItems="flex-start">
//                 <ListItemAvatar>
//                   <Avatar>
//                     <WorkIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   primary={
//                     <Typography
//                       variant="h5"
//                       gutterBottom
//                       sx={{ fontWeight: 'bold', color: '#333' }}
//                     >
//                       {job.companyname}
//                     </Typography>
//                   }
//                   secondary={
//                     <React.Fragment>
//                       <Typography
//                         variant="body1"
//                         gutterBottom
//                         sx={{ color: '#555' }}
//                       >
//                         Job Title: {job.jobtitle}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         gutterBottom
//                         sx={{ color: '#555' }}
//                       >
//                         Description: {job.description}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         gutterBottom
//                         sx={{ color: '#555' }}
//                       >
//                         Salary: {job.salary}
//                       </Typography>
//                       <Typography
//                         variant="caption"
//                         gutterBottom
//                         sx={{ color: '#888' }}
//                       >
//                         {/* Last Updated: {job.lastUpdated} */}
//                       </Typography>
//                     </React.Fragment>
//                   }
//                 />
//                 <ListItemAvatar onClick={() => deleteJob(job.companyname, job.jobtitle)}>
//                   <Avatar sx={{ backgroundColor: '#D9C97A', cursor: 'pointer' }}>
//                     <DeleteOutlinedIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//               </ListItem>
//             </Box>
//           ))}
//       </List>
//     </div>
//   );
// };

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { Box } from '@mui/material';

export default ({ jobPosts }) => {
  return (
    <div>
      {console.log(jobPosts)}
      <List
        sx={{
          marginTop: '50px',
        }}
      >
        {jobPosts &&
          jobPosts.map((job) => (
            <Box
              key={job._id}
              sx={{
                flexGrow: 1,
                maxWidth: 752,
                backgroundColor: '#F2E5A2', // Pastel Yellow
                borderRadius: '10px',
                marginBottom: '15px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 'bold', color: '#333' }}
                    >
                      {job.companyname}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ color: '#555' }}
                      >
                        Job Title: {job.jobtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ color: '#555' }}
                      >
                        Description: {job.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ color: '#555' }}
                      >
                        Salary: {job.salary}
                      </Typography>
                      <Typography
                        variant="caption"
                        gutterBottom
                        sx={{ color: '#888' }}
                      >
                        {/* Last Updated: {job.lastUpdated} */}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Box>
          ))}
      </List>
    </div>
  );
};
