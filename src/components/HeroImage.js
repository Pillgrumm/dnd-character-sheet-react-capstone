import React from 'react';
import LandingPageInfo from './hero-image-subcomponents/LandingPageInfo';
import LoginFormSection from './hero-image-subcomponents/LoginFormSection';
import SignUpForm from './hero-image-subcomponents/SignUpForm';
import Details from './hero-image-subcomponents/Details';
import Footer from './hero-image-subcomponents/Footer';
//
function HeroImage() {
    return (
            <main className="hero-image">
                <LandingPageInfo />
                <LoginFormSection />
                <SignUpForm />
                <Details />
                <Footer />
            </main>
    );
}

export default HeroImage;
