import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("email"); // Get the logged-in user's email from localStorage

  useEffect(() => {
    if (userEmail) {
      axios
        .get("http://localhost:3000/user/getImages", { params: { email: userEmail } }) // Fetch images for the logged-in user
        .then((response) => {
          setImagePaths(response.data);
          console.log("Fetched images:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
          setError("Error fetching images.");
        });
    } else {
      setError("User email not found in session.");
    }
  }, [userEmail]);

  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        overflowY: "scroll",
        backgroundColor: "#F2E5A2",
        marginTop: "30px",
        border: 10,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {error ? (
        <p>{error}</p>
      ) : (
        <ImageList variant="masonry" cols={3} gap={8}>
          {imagePaths.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`http://localhost:3000${item}`} // Fetch images dynamically from the backend
                alt={`User Image ${index}`}
                loading="lazy"
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
};
