import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavBar/NavigationBar";
import AboutCard from "../components/Card/AboutCard";
import ceo from "../../assets/ceo.jpg";
import recruiter from "../../assets/recruiter.jpg";
import hr from "../../assets/hr.jpg";
import datascientist from "../../assets/datascientist.jpg";
import productanalyst from "../../assets/productanalyst.jpg";
import dataanalyst from "../../assets/dataanalyst.jpg"

export default () => {

    const personInfo = [
        {
          id: 1,
          name: 'Sarah Wiley',
          description: 'CEO',
          image: ceo,
        },
        {
          id: 2,
          name: 'Adam Roberts',
          description: 'Recruiter',
          image: recruiter,
        },
        {
            id: 3,
            name: 'Michael Scott',
            description: 'HR Manager',
            image: hr,
          },
          {
            id: 4,
            name: 'Manny Rodrigo',
            description: 'Data Scientist',
            image: datascientist,
          },
          {
            id: 5,
            name: 'Kendra Lima',
            description: 'Data Analyst',
            image: dataanalyst,
          },
          {
            id: 6,
            name: 'Jim Halpert',
            description: 'Product Analyst',
            image: productanalyst,
          },
      ];

    return (
        <>
            <NavigationBar name="About Us"/>
            <AboutCard personInfo={personInfo}/>
            <Footer/>
        </>
    );
}