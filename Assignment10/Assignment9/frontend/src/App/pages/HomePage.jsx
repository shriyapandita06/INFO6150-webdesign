import Footer from "../components/Footer/Footer";
import HomeCard from "../components/Card/HomeCard";
import NavigationBar from "../components/NavBar/NavigationBar";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import jobSearchImage from '../../assets/main.jpg'; // Importing the background image

export default () => {
    const { token } = useSelector((state) => state.auth);

    if (!token) {
        return <Navigate to="/" />;
    }

    // Inline styles for the background
    const backgroundStyles = {
        backgroundImage: `url(${jobSearchImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh', // Full viewport height
        padding: '20px', // Add some padding for content
    };

    return (
        <div style={backgroundStyles}> {/* Apply background styles here */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <NavigationBar name="Home" />
            <HomeCard />
            <Footer />
        </div>
    );
};


// import Footer from "../components/Footer/Footer";
// import HomeCard from "../components/Card/HomeCard";
// import NavigationBar from "../components/NavBar/NavigationBar";
// import { Navigate } from 'react-router-dom';
// import { useSelector } from "react-redux";

// export default () => {

//     const { token: token } = useSelector((state) => state.auth);

//     if (!token) {
//         return <Navigate to="/" />;
//     }

//     return (
//         <>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//             <NavigationBar name="Home"/>
//             <HomeCard/>
//             <Footer/>
//         </>
//     );
// };