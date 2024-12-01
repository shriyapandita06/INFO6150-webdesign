// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Box, Typography } from '@mui/material';

// export default function ContactForm() {

//   const handleClick= () => {
//     document.getElementById('contact-form').submit();
//     alert("You message has been submitted. We will be in touch soon!");
//   }

//   return (
//     <React.Fragment>
//       <Box alignItems="center" sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#F3FFFF', marginTop: '50px' }}>
//         <br/>
//         <Typography variant='body1'>Do you have any questions? Please do not hesitate to contact us
//           directly. Our team will come back to you within a matter of hours to
//           help you.</Typography>
//         <form id="contact-form">
//           <TextField
//             label="Name"
//             required
//             variant="outlined"
//             placeholder='Enter your Name'
//             color="primary"
//             type="name"
//             sx={{mb: 3}}
//             fullWidth
//           />
//           <TextField
//             label="Email"
//             required
//             placeholder='Enter your Email'
//             variant="outlined"
//             color="primary"
//             type="email"
//             sx={{mb: 3}}
//             fullWidth
//           />
//           <TextField
//             label="Subject"
//             variant="outlined"
//             color="primary"
//             placeholder='Enter your Subject'
//             type="email"
//             sx={{mb: 3}}
//             fullWidth
//           />
//           <TextField
//             label="Message"
//             variant="outlined"
//             color="primary"
//             type="email"
//             sx={{mb: 3}}
//             multiline
//             placeholder='Enter your Message'
//             rows={4}
//             fullWidth
//           />
//           <Button 
//             variant="outlined" 
//             style={{ color:'black', borderBlockColor: 'black' }}
//             onClick={() => handleClick()}
//           >Send</Button>
//         </form>
//       </Box>
//     </React.Fragment>
//   );
// }

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const allowedDomains = [
    'northeastern.edu',
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'yahoo.com',
  ];

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email structure
    const domain = email.split('@')[1]; // Extract domain name
    return emailRegex.test(email) && allowedDomains.includes(domain);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: validateName(value) ? '' : 'Name can only contain letters and spaces.',
      }));
    }
    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value)
          ? ''
          : `Please enter a valid email address with allowed domains: ${allowedDomains.join(', ')}`,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && formData.name && formData.email) {
      alert('Your message has been submitted. We will be in touch soon!');
      // Add further submission logic here
    } else {
      alert('Please fix the errors before submitting the form.');
    }
  };

  return (
    <React.Fragment>
      <Box
        alignItems="center"
        sx={{
          flexGrow: 1,
          maxWidth: 752,
          backgroundColor: '#F2E5A2', // Pastel Yellow
          marginTop: '50px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
          }}
        >
          Do you have any questions? Please do not hesitate to contact us directly.
          Our team will come back to you within a matter of hours to help you.
        </Typography>
        <form id="contact-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            required
            variant="outlined"
            placeholder="Enter your Name"
            color="primary"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={Boolean(errors.name)}
            helperText={errors.name}
            sx={{ mb: 3, backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            required
            placeholder="Enter your Email"
            variant="outlined"
            color="primary"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={Boolean(errors.email)}
            helperText={errors.email}
            sx={{ mb: 3, backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            fullWidth
          />
          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            color="primary"
            placeholder="Enter your Subject"
            value={formData.subject}
            onChange={handleInputChange}
            sx={{ mb: 3, backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            color="primary"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            sx={{ mb: 3, backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#D9C97A',
              color: 'black',
              fontWeight: 'bold',
              ':hover': { backgroundColor: '#CBB96D' },
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
}


