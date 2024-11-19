import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/getImages")
      .then((response) => {
        setImagePaths(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching image paths:", error);
        setError("Error fetching image paths");
      });
  }, []);

  return (
    <>
      <Box 
        sx={{ 
          width: '100%', 
          height: 450, 
          overflowY: 'scroll', 
          backgroundColor: '#F2E5A2', // Updated to pastel yellow
          marginTop: '30px', 
          border: 10, 
          borderColor: 'rgba(0, 0, 0, 0.2)', 
          borderRadius: '10px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' // Add shadow for visual enhancement
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {imagePaths.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`http://localhost:3000${item}`} // Added the base URL
                alt={item}
                loading="lazy"
                style={{
                  borderRadius: '8px', // Rounded corners for images
                  objectFit: 'cover' // Ensure consistent image scaling
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// export default () => {

//   const [imagePaths, setImagePaths] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {

//     axios
//       .get("http://localhost:3000/user/getImages")
//       .then((response) => {
//         setImagePaths(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching image paths:", error);
//         setError("Error fetching image paths");
//       });
//   }, []);

// return (
//     <>
//       <Box sx={{ width: '100%', height: 450, overflowY: 'scroll', backgroundColor: 'black', marginTop: '30px', border: 10 }}>
//       <ImageList variant="masonry" cols={3} gap={8} >
//         {imagePaths.map((item, index) => (
//           <ImageListItem key={index}>
//             <img
//               src={item}
//               alt={item}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//     </>
//   );
// }