import React, { useState } from 'react';
import Notification from '../components/Notification';
import addPlusIcon from '../assets/add-plus.svg'; // Assuming you have this icon
import next from '../assets/forward-arrow.svg'
import back from '../assets/back-arrow.svg'
import './CreateGig.css'; // Import the CSS file for the tracker
import ReactQuill from 'react-quill'; // Import ReactQuill for rich text editing
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS for styling

function CreateGig({ walletAddress, addGig }) {
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
  const [step, setStep] = useState(1); // Track current step

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setCompanyLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (step === 1) {
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

      addGig(newGig);
      setNotification('Gig posted successfully!');
      resetForm();
    } else if (step === 2) {
      // Handle submission for quiz form (for now just a placeholder)
      alert('Quiz form submitted!');
    }
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

  const handleNext = () => {
    if (step === 1) {
      // Transition to the next step
      setStep(2);
    }
  };

  const handlePrevious = () => {
    if (step === 2) {
      // Transition back to the previous step
      setStep(1);
    }
  };

  const handleCancel = () => {
    resetForm();
    // Redirect to /gig
    window.location.href = '/gig';
  };

  return (
    <div className="min-h-screen font-[Times New Roman] flex items-center justify-center bg-white p-6 relative">
      {/* Progress Tracker */}
      <div className="progress-tracker mt-[30px]">
        <span className="tracker-label ml-[-30px]">Gig Info</span>
        <div className={`circle ${step === 1 ? 'active' : ''}`}>
        </div>
        <div className={`line ${step === 2 ? 'filled' : ''}`}></div>
        <div className={`circle ${step === 2 ? 'active' : ''}`}>
        </div>
        <span className="tracker-label ml-[540px]">Add Quiz</span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 w-full mt-[90px] max-w-4xl bg-white p-8 rounded-md shadow-lg relative">
        {step === 1 && (
          <>
            <div>
              <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-700">
                Company Logo
              </label>
              <div
                className={`w-[60%] h-48 flex items-center justify-center border-2 border-gray-300 rounded-md cursor-pointer ${companyLogo ? 'bg-transparent' : 'bg-gray-200'}`}
                onClick={() => document.getElementById('companyLogo').click()}
              >
                {companyLogo ? (
                  <img src={companyLogo} alt="Company Logo" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <img src={addPlusIcon} alt="Add Plus" className="w-12 h-12" />
                )}
                <input
                  type="file"
                  id="companyLogo"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                Rate
              </label>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700">
                About the Company
              </label>
              <ReactQuill
                theme="snow"
                value={aboutCompany}
                onChange={setAboutCompany}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <ReactQuill
                theme="snow"
                value={jobDescription}
                onChange={setJobDescription}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="kpis" className="block text-sm font-medium text-gray-700">
                KPIs
              </label>
              <ReactQuill
                theme="snow"
                value={kpis}
                onChange={setKpis}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="requiredQualifications" className="block text-sm font-medium text-gray-700">
                Required Qualifications
              </label>
              <ReactQuill
                theme="snow"
                value={requiredQualifications}
                onChange={setRequiredQualifications}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button type="button" onClick={handleNext} className="bg-[#ff0909] text-white px-4 py-2 rounded-md">
                Next <img src={next} alt="Next" className="inline w-4 h-4 ml-2" />
              </button>
              <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                Cancel
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Quiz Form</h2>
            {/* Placeholder content for the quiz form */}
            <p>Quiz form content goes here...</p>
            <div className="flex justify-between items-center">
              <button type="button" onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">
              <img src={back} alt="Back" className="inline w-4 h-4 mr-2" /> Previous
              </button>
              <button type="submit" className="bg-[#ff0909] text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </>
        )}
      </form>

      {/* Display notification if any */}
      {notification && (
        <Notification message={notification} duration={3000} onClose={() => setNotification('')} />
      )}
    </div>
  );
}

export default CreateGig;
