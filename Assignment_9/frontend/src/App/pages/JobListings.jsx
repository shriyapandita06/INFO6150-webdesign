
import Footer from "../components/Footer/Footer";
import JobPost from "../components/Form/JobPost";
import NavigationBar from "../components/NavBar/NavigationBar";
import * as React from 'react';

export default () => {
    // Static data for the job posts
    const jobPosts = [
        {
          id: 1,
          title: 'Full Stack Developer',
          description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
          lastUpdated: 'Last updated 2 days ago',
          applyLink: 'https://example.com/apply/full-stack-developer',
        },
        {
          id: 2,
          title: 'Digital Marketing Specialist',
          description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
          lastUpdated: 'Last updated 1 day ago',
          applyLink: 'https://example.com/apply/digital-marketing-specialist',
        },
        {
          id: 3,
          title: 'UX/UI Designer',
          description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
          lastUpdated: 'Last updated 4 hours ago',
          applyLink: 'https://example.com/apply/ux-ui-designer',
        },
        {
          id: 4,
          title: 'Data Scientist',
          description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
          lastUpdated: 'Last updated 3 days ago',
          applyLink: 'https://example.com/apply/data-scientist',
        },
        {
          id: 5,
          title: 'Customer Support Representative',
          description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
          lastUpdated: 'Last updated 6 hours ago',
          applyLink: 'https://example.com/apply/customer-support-representative',
        },
        {
          id: 6,
          title: 'Project Manager',
          description: 'Guide and coordinate project teams. Work alongside cross-functional teams and stakeholders to turn ideas into reality.',
          lastUpdated: 'Last updated 6 hours ago',
          applyLink: 'https://example.com/apply/product-manager',
        },   
    ];

    return (
        <>
            <NavigationBar name="Job Listings" />
            {/* Pass the static jobPosts data to JobPost */}
            <JobPost jobPosts={jobPosts} />
            <Footer />
        </>
    );
};
