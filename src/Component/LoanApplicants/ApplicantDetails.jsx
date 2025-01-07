import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApplicantDetails = ({ applicants, setApplicants }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Check if applicants is passed and find the applicant by id
  const applicant = applicants?.find((app) => app.id === parseInt(id));

  // If no applicant found, show an error message
  if (!applicant) {
    return <div>Applicant not found.</div>;
  }

  const [declineMessage, setDeclineMessage] = useState("");

  const handleApprove = () => {
    setApplicants((prev) =>
      prev.map((app) =>
        app.id === applicant.id ? { ...app, status: "approved" } : app
      )
    );
    navigate("/");
  };

  const handleDecline = () => {
    if (!declineMessage) {
      alert("Please provide a reason for declining the application.");
      return;
    }
    setApplicants((prev) =>
      prev.map((app) =>
        app.id === applicant.id
          ? { ...app, status: "declined", message: declineMessage }
          : app
      )
    );
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Applicant Details: {applicant.name}
      </h2>
      {Object.entries(applicant.documents).map(([section, docs]) => (
        <div key={section} className="mb-6">
          <h3 className="text-xl font-semibold capitalize mb-2">
            {section} Documents
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(docs).map(([key, value]) => {
              if (Array.isArray(value)) {
                return value.map((doc, index) => (
                  <li key={`${key}-${index}`} className="p-4 border rounded shadow">
                    <p className="font-medium">{key} {index + 1}</p>
                    <a
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Document
                    </a>
                  </li>
                ));
              } else {
                return (
                  <li key={key} className="p-4 border rounded shadow">
                    <p className="font-medium">{key}</p>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Document
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      ))}
      <div className="mt-6">
        <textarea
          placeholder="Enter reason for decline"
          value={declineMessage}
          onChange={(e) => setDeclineMessage(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleApprove}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Approve
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
