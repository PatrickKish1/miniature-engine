import React from 'react';
// Importing images
import briefcaseIcon from '../assets/briefcase.svg';
import calendarIcon from '../assets/calender.svg';
import moneyIcon from '../assets/money.svg';
import profileFillIcon from '../assets/profile-fill.svg';
import bgHexagon1 from '../assets/bitmapGrey 1.png';
import bgHexagon2 from '../assets/bitmapGrey 2.png';
import girlCoding from '../assets/bro.png';
import partnerImage1 from '../assets/optimism.png';
import partnerImage2 from '../assets/the-graph.png';
import partnerImage3 from '../assets/esp-logo.png';
import partnerImage4 from '../assets/web3ladies-logo.png';
import partnerImage5 from '../assets/web3.png';
import partnerImage6 from '../assets/buidl.png';
import partnerImage7 from '../assets/circles-logo.png';
import partnerImage8 from '../assets/meta-logo.png';
import twitterIcon from '../assets/TwitterX.svg';
import instagramIcon from '../assets/Instagram.svg';
import linkedinIcon from '../assets/LinkedIn.svg';
import whatWeDo from '../assets/bro1.png';
// Importing the Gigs component
import Gigs from './Gigs';

function Home() {
  // Assuming Gigs component exports an array of gigs
  const gigs = Gigs.slice(0, 8); // Limit to 8 gigs

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-wrap items-center justify-between px-12 bg-white py-16 overflow-hidden">
        <div className="absolute left-0 top-10 z-0">
          <img src={bgHexagon1} alt="Background Hexagon" width={280} height={280} />
        </div>

        <div className="max-w-1/2 z-10 mb-[400px] ml-10 relative">
          <h2 className="text-gray-800 text-lg mb-6">Are You Looking For A Quick Gig?!</h2>
          <h3 className="text-red-600 text-5xl font-bold mb-2">EquiBloc Got You!</h3>
          <p className="text-gray-500 text-lg mb-2">Connect your wallet to get started</p>
          <button className="bg-red-600 text-white px-8 py-2 rounded-md font-bold">Get Started</button>
        </div>

        <div className="relative z-10 mb-[80px]">
          <div className="absolute right-[-50px] bottom-[-90px] z-0">
            <img src={bgHexagon2} alt="Background Hexagon" width={280} height={280} />
          </div>
          <div className="relative z-10 mr-24 mb-5">
            <img src={girlCoding} alt="Girl Coding Illustration" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="text-center py-12 bg-white px-5 mt-0">
        <h3 className="text-red-600 text-4xl mb-10 font-bold">Our Partners</h3>
        <div className="flex justify-center flex-wrap items-center gap-8">
          {[
            partnerImage1, partnerImage2, partnerImage3, partnerImage4,
            partnerImage5, partnerImage6, partnerImage7, partnerImage8
          ].map((src, index) => (
            <div key={index} className="w-32 h-16 relative">
              <img src={src} alt={`Partner ${index + 1}`} className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Jobs Section */}
      <section className="relative text-center py-12 px-5 bg-white overflow-hidden">
        <div className="absolute left-0 top-0">
          <img src={bgHexagon1} alt="Hexagon" width={250} height={250} />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={bgHexagon2} alt="Hexagon" width={250} height={250} />
        </div>

        <h2 className="text-red-600 text-6xl font-bold mb-[80px]">Trending Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[85px] mr-[80px] px-5">
          {gigs.map(gig => (
            <div key={gig.id} className="relative w-full h-[270px] bg-white rounded-lg shadow-md p-3 flex flex-col justify-between">
              {/* Job Type */}
              <div className="absolute top-2 right-2 bg-[#ff0909] text-white text-xs px-3 py-1 rounded-l-[30px]">{gig.type}</div>

              <div className="flex items-center mb-2">
                <div className="w-[80px] h-[80px] relative mt-[50px] mr-3">
                  <img src={gig.companyLogo} alt="Company Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <span className="text-lg mt-8 mb-[-20px] font-semibold">{gig.jobTitle}</span>
              </div>

              <div className="flex flex-col text-gray-500 text-sm mb-2">
                <div className="flex items-center ml-[10px] mb-3">
                  <img src={briefcaseIcon} alt="Company" style={{ width: '14px', height: '14px' }} className="mr-1" />
                  <span>{gig.companyName}</span>
                </div>
                <div className="flex items-center mt-[-30px] ml-[120px]">
                  <img src={calendarIcon} alt="Duration" style={{ width: '14px', height: '14px' }} className="mr-1" />
                  <span>{gig.duration}</span>
                </div>
                <div className="flex items-center ml-2">
                  <img src={moneyIcon} alt="Rate" style={{ width: '14px', height: '14px' }} className="mr-1" />
                  <span>{gig.rate}</span>
                </div>
              </div>
              <div className="flex items-center mt-[-18px] ml-[120px]">
                <img src={profileFillIcon} alt="Profile Fill" style={{ width: '14px', height: '14px' }} className="mr-1" />
                <span>{gig.rate}</span>
              </div>
              <button className="bg-[#263238] text-white px-4 py-2 rounded-md text-sm self-center text-center">Apply now</button>
            </div>
          ))}
        </div>
        <button className="mt-[100px] bg-red-600 text-white px-8 py-2 rounded-md font-bold">
            View all
            </button>
      </section>

      {/* About Us Section */}
      <section className="flex justify-between bg-white items-center px-12 py-20 mt-[0px]">
        <div className="max-w-1/2 ml-8">
          <h2 className="text-gray-800 text-2xl mb-6">About Us</h2>
          <p className="text-gray-500 text-lg mb-4">
            We are a team dedicated to connecting freelancers with quick gigs.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" width={40} height={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" width={40} height={40} />
            </a>
          </div>
          <button className="bg-red-600 text-white px-8 py-2 rounded-md font-bold mt-5">
            Learn More
          </button>
        </div>

        <div className="flex items-center">
          <img src={whatWeDo} alt="What We Do" width={400} height={400} />
        </div>
      </section>
    </div>
  );
}

export default Home;
