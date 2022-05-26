import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import Reviews from './Reviews/Reviews';
import TeamMembers from './TeamMembers';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummery />
            <TeamMembers />
            <Reviews />
            <ContactUs />
        </div>
    );
};

export default Home;