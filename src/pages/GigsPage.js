import React, { useState } from 'react';
import Notification from '../components/Notification'; // Assuming Notification component is in the same folder
import cancelIcon from '../assets/cancel.svg'; // Import cancel icon as shown in Home.js

function GigsPage({ walletAddress }) {
  const [showForm, setShowForm] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');
  const [type, setType] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [kpis, setKpis] = useState('');
  const [requiredQualifications, setRequiredQualifications] = useState('');
  const [notification, setNotification] = useState('');
  const [gigs, setGigs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Gigs');

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setCompanyLogo(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!jobTitle || !companyName || !rate || !duration || !type || !aboutCompany || !jobDescription || !kpis || !requiredQualifications) {
      setNotification('Please fill out all fields.');
      return;
    }

    const newGig = {
      id: walletAddress, // Use walletAddress as unique ID for the user
      companyLogo,
      jobTitle,
      companyName,
      rate,
      duration,
      type,
      aboutCompany,
      jobDescription,
      kpis,
      requiredQualifications,
    };

    setGigs([...gigs, newGig]);
    setShowForm(false);
    setNotification('Gig posted successfully!');
    resetForm();
  };

  const resetForm = () => {
    setCompanyLogo(null);
    setJobTitle('');
    setCompanyName('');
    setRate('');
    setDuration('');
    setType('');
    setAboutCompany('');
    setJobDescription('');
    setKpis('');
    setRequiredQualifications('');
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <header className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">Gigs</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#ff0909] bg-600 text-white mr-[-200px] px-4 py-2 rounded-md"
          >
            Create Gig
          </button>
        </header>

        {/* Navigation Filters */}
        <nav className="flex space-x-4 mb-4 border-b-2 border-gray-300">
          {['All Gigs', 'Approved', 'Pending'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-1 px-4 mb-2 ${activeFilter === filter ? 'bg-[#ff0909] bg-600 rounded text-white' : 'text-black'} focus:outline-none`}
            >
              {filter}
            </button>
          ))}
        </nav>

        {/* Display message or list of created gigs */}
        <div className="mb-4">
          {gigs.length > 0 ? (
            <div>
              {gigs.map((gig, index) => (
                <div key={index} className="mb-4 border rounded-md p-4">
                  <h2 className="text-lg font-bold">{gig.jobTitle}</h2>
                  <p>{gig.companyName}</p>
                  <p>{gig.rate}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center ml-[250px] mt-[100px] items-center h-40 w-40 border rounded-md bg-gray-100">
              <p>No gigs created.</p>
            </div>
          )}
        </div>

        {/* Notification Component */}
        {notification && <Notification message={notification} />}

        {/* Create Gig Form Overlay */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-[90%] max-w-lg relative">
              <button onClick={handleCancel} className="absolute top-2 right-2">
                <img src={cancelIcon} alt="Cancel" className="w-6 h-6" />
              </button>
              <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[70vh]">
                <div>
                  <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-700">
                    Company Logo
                  </label>
                  <input type="file" id="companyLogo" onChange={handleFileChange} className="w-full" accept="image/*" />
                  {companyLogo && <span>{companyLogo.name}</span>}
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div>
                  <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                    Rate
                  </label>
                  <input type="text" id="rate" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Duration
                  </label>
                  <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div>
                  <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700">
                    About the Company
                  </label>
                  <textarea id="aboutCompany" value={aboutCompany} onChange={(e) => setAboutCompany(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" rows="4" required></textarea>
                </div>
                <div>
                  <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <textarea id="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" rows="4" required></textarea>
                </div>
                <div>
                  <label htmlFor="kpis" className="block text-sm font-medium text-gray-700">
                    KPIs
                  </label>
                  <textarea id="kpis" value={kpis} onChange={(e) => setKpis(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" rows="4" required></textarea>
                </div>
                <div>
                  <label htmlFor="requiredQualifications" className="block text-sm font-medium text-gray-700">
                    Required Qualifications
                  </label>
                  <textarea id="requiredQualifications" value={requiredQualifications} onChange={(e) => setRequiredQualifications(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" rows="4" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-[#ff0909] bg-600 text-white px-4 py-2 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GigsPage;
