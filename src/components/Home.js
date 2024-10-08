import { React } from 'react';
import { Link } from 'react-router-dom';
import briefcaseIcon from '../assets/briefcase.svg';
import calendarIcon from '../assets/calender.svg';
import moneyIcon from '../assets/money.svg';
import profileFillIcon from '../assets/profile-fill.svg';
import bgHexagon1 from '../assets/bitmapGrey 1.png';
import bgHexagon2 from '../assets/bitmapGrey 2.png';
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
import Products from './Products';


function Home() {
  const products = Products.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-wrap items-center justify-between px-12 bg-white py-16 overflow-hidden">
        <div className="absolute left-0 top-10 z-0">
          <img src={bgHexagon1} alt="Background Hexagon" width={280} height={280} />
        </div>

        <div className="max-w-1/2 z-10 mb-[400px] ml-10 relative">
          <h2 className="text-gray-800 text-lg mt-4 mb-6">Looking For Affordable Products From Trusted Sources?!</h2>
          <h3 className="text-red-600 text-5xl font-bold mb-2">AgroBiz Got You!</h3>
          <p className="text-gray-500 text-lg mb-2">Connect your wallet to get started</p>
          <Link>
            <button className="bg-green-600 text-white px-8 py-2 rounded-md font-bold">Get Started</button>
          </Link>
          
        </div>

        <div className="relative z-10 mb-[80px]">
          <div className="absolute right-[-50px] bottom-[-90px] z-0">
            <img src={bgHexagon2} alt="Background Hexagon" width={280} height={280} />
          </div>
          <div className="relative z-10 mr-24 mb-5">
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2023-02/22/3/asset/5683c53a7513/sub-buzz-863-1677035525-1.jpg?crop=2923:1706;0,335" alt="Girl Coding Illustration" width={500} height={500} className='rounded-lg h-[420px] mb-[90px]'/>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="text-center py-12 bg-white px-5 mt-0">
        <h3 className="text-green-600 text-4xl mb-10 font-bold">Our Partners</h3>
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

        <h2 className="text-green-600 text-6xl font-bold mb-[80px]">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[85px] mr-[80px] px-5">
          {products.map(product => (
            <div key={product.id} className="relative w-full h-[270px] bg-white rounded-lg shadow-md p-3 flex flex-col justify-between">
              <div className="flex items-center mb-2">
                <div className="w-[80px] h-[80px] relative mt-[50px] mr-3">
                  <img src={product.companyLogo} alt="Company Logo" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
                </div>
                <span className="text-lg mt-8 mb-[-20px] font-semibold">{product.jobTitle}</span>
              </div>

              <div className="flex flex-col text-gray-500 text-sm mb-2">
                <div className="flex items-center mr-[20px] mb-3">
                  <img src={briefcaseIcon} alt="Company" style={{ width: '14px', height: '14px' }} className="mr-[5px]" />
                  <span>{product.companyName}</span>
                </div>
                <div className="flex items-center mt-[-30px] ml-[120px]">
                  <img src={calendarIcon} alt="Duration" style={{ width: '14px', height: '14px' }} className="mr-1" />
                  <span>{product.duration}</span>
                </div>
                <div className="flex items-center mr-[10px]">
                  <img src={moneyIcon} alt="Rate" style={{ width: '14px', height: '14px' }} className="mr-1" />
                  <span>{product.rate}</span>
                </div>
                <div className="flex items-center mt-[-18px] ml-[120px]">
                <img src={profileFillIcon} alt="Profile Fill" style={{ width: '14px', height: '14px' }} className="mr-1" />
                <span>{product.quantity}</span>
              </div>
              </div>
              <button className="bg-[#263238] text-white px-4 py-2 rounded-md text-sm self-center text-center">Buy Now</button>
            </div>
          ))}
        </div>
        <button className="mt-[100px] bg-green-600 text-white px-8 py-2 rounded-md font-bold">
            View all
            </button>
      </section>

      {/* About Us Section */}
      <section className="flex justify-between bg-white items-center px-12 py-20 mt-[0px]">
        <div className="max-w-1/2 ml-8">
          <h2 className="text-gray-800 text-2xl mb-6">About Us</h2>
          <p className="text-gray-500 text-lg mb-4">
            We connect top product sellers with affordable pricing and minimal delivery time to provide convininece, ease and quality product distribution across Africa.
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
          <button className="bg-green-600 text-white px-8 py-2 rounded-md font-bold mt-5">
            Learn More
          </button>
        </div>

        <div className="flex items-center">
          <img src="https://img.freepik.com/premium-vector/people-shopping-cartoon-man-woman-buy-clothes-electronics-online-store-mobile-application-with-possibility-cashless-payment-discounts-vector-internet-shop-concept_176516-3547.jpg" alt="What We Do" width={1200} height={1200} />
        </div>
      </section>
    </div>
  );
}

export default Home;
