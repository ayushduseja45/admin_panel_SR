import React, { useState } from "react";

const LoanApplicants = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [declineMessage, setDeclineMessage] = useState("");

  // Example applicant data
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      status: "pending",
      message: "",
      documents: {
        identification: {
          pan: "john_pan.pdf",
          aadhar: "john_aadhar.pdf",
          passport: "john_passport.pdf",
        },
        academic: {
          marksheet10: "john_10th_marksheet.pdf",
          marksheet12: "john_12th_marksheet.pdf",
          transcript: "john_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "john_bank_statement.pdf",
        },
        parents: {
          fatherPan: "john_father_pan.pdf",
          fatherAadhar: "john_father_aadhar.pdf",
          motherPan: "john_mother_pan.pdf",
          motherAadhar: "john_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "john_coapplicant_pan.pdf",
          aadhar: "john_coapplicant_aadhar.pdf",
          electricityBill: "john_electricity_bill.pdf",
          salarySlips: [
            "john_salary_slip_1.pdf",
            "john_salary_slip_2.pdf",
            "john_salary_slip_3.pdf",
          ],
        },
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "pending",
      message: "",
      documents: {
        identification: {
          pan: "jane_pan.pdf",
          aadhar: "jane_aadhar.pdf",
          passport: "jane_passport.pdf",
        },
        academic: {
          marksheet10: "jane_10th_marksheet.pdf",
          marksheet12: "jane_12th_marksheet.pdf",
          transcript: "jane_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "jane_bank_statement.pdf",
        },
        parents: {
          fatherPan: "jane_father_pan.pdf",
          fatherAadhar: "jane_father_aadhar.pdf",
          motherPan: "jane_mother_pan.pdf",
          motherAadhar: "jane_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "jane_coapplicant_pan.pdf",
          aadhar: "jane_coapplicant_aadhar.pdf",
          electricityBill: "jane_electricity_bill.pdf",
          salarySlips: [
            "jane_salary_slip_1.pdf",
            "jane_salary_slip_2.pdf",
            "jane_salary_slip_3.pdf",
          ],
        },
      },
    },
    {
      id: 3,
      name: "Robert Brown",
      status: "pending",
      message: "Insufficient documents provided.",
      documents: {
        identification: {
          pan: "robert_pan.pdf",
          aadhar: "robert_aadhar.pdf",
          passport: "robert_passport.pdf",
        },
        academic: {
          marksheet10: "robert_10th_marksheet.pdf",
          marksheet12: "robert_12th_marksheet.pdf",
          transcript: "robert_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "robert_bank_statement.pdf",
        },
        parents: {
          fatherPan: "robert_father_pan.pdf",
          fatherAadhar: "robert_father_aadhar.pdf",
          motherPan: "robert_mother_pan.pdf",
          motherAadhar: "robert_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "robert_coapplicant_pan.pdf",
          aadhar: "robert_coapplicant_aadhar.pdf",
          electricityBill: "robert_electricity_bill.pdf",
          salarySlips: [
            "robert_salary_slip_1.pdf",
            "robert_salary_slip_2.pdf",
            "robert_salary_slip_3.pdf",
          ],
        },
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      status: "pending",
      message: "",
      documents: {
        identification: {
          pan: "emily_pan.pdf",
          aadhar: "emily_aadhar.pdf",
          passport: "emily_passport.pdf",
        },
        academic: {
          marksheet10: "emily_10th_marksheet.pdf",
          marksheet12: "emily_12th_marksheet.pdf",
          transcript: "emily_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "emily_bank_statement.pdf",
        },
        parents: {
          fatherPan: "emily_father_pan.pdf",
          fatherAadhar: "emily_father_aadhar.pdf",
          motherPan: "emily_mother_pan.pdf",
          motherAadhar: "emily_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "emily_coapplicant_pan.pdf",
          aadhar: "emily_coapplicant_aadhar.pdf",
          electricityBill: "emily_electricity_bill.pdf",
          salarySlips: [
            "emily_salary_slip_1.pdf",
            "emily_salary_slip_2.pdf",
            "emily_salary_slip_3.pdf",
          ],
        },
      },
    },
    {
      id: 5,
      name: "Michael Wilson",
      status: "pending",
      message: "",
      documents: {
        identification: {
          pan: "michael_pan.pdf",
          aadhar: "michael_aadhar.pdf",
          passport: "michael_passport.pdf",
        },
        academic: {
          marksheet10: "michael_10th_marksheet.pdf",
          marksheet12: "michael_12th_marksheet.pdf",
          transcript: "michael_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "michael_bank_statement.pdf",
        },
        parents: {
          fatherPan: "michael_father_pan.pdf",
          fatherAadhar: "michael_father_aadhar.pdf",
          motherPan: "michael_mother_pan.pdf",
          motherAadhar: "michael_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "michael_coapplicant_pan.pdf",
          aadhar: "michael_coapplicant_aadhar.pdf",
          electricityBill: "michael_electricity_bill.pdf",
          salarySlips: [
            "michael_salary_slip_1.pdf",
            "michael_salary_slip_2.pdf",
            "michael_salary_slip_3.pdf",
          ],
        },
      },
    },
    {
      id: 6,
      name: "Sophia Martinez",
      status: "pending",
      message: "Documents were not legible.",
      documents: {
        identification: {
          pan: "sophia_pan.pdf",
          aadhar: "sophia_aadhar.pdf",
          passport: "sophia_passport.pdf",
        },
        academic: {
          marksheet10: "sophia_10th_marksheet.pdf",
          marksheet12: "sophia_12th_marksheet.pdf",
          transcript: "sophia_ug_transcript.pdf",
        },
        financial: {
          bankStatement: "sophia_bank_statement.pdf",
        },
        parents: {
          fatherPan: "sophia_father_pan.pdf",
          fatherAadhar: "sophia_father_aadhar.pdf",
          motherPan: "sophia_mother_pan.pdf",
          motherAadhar: "sophia_mother_aadhar.pdf",
        },
        coApplicants: {
          pan: "sophia_coapplicant_pan.pdf",
          aadhar: "sophia_coapplicant_aadhar.pdf",
          electricityBill: "sophia_electricity_bill.pdf",
          salarySlips: [
            "sophia_salary_slip_1.pdf",
            "sophia_salary_slip_2.pdf",
            "sophia_salary_slip_3.pdf",
          ],
        },
      },
    },
    // Add more applicants as necessary
  ]);
  

  // Approve the application
  const handleApprove = (id) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id ? { ...applicant, status: "approved" } : applicant
      )
    );
    setSelectedApplicant(null);
  };

  // Decline the application
  const handleDecline = (id, message) => {
    if (!message) {
      alert("Please provide a reason for declining the application.");
      return;
    }
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: "declined", message }
          : applicant
      )
    );
    setSelectedApplicant(null);
    setDeclineMessage(""); // Reset decline message
  };

  // Function to render the list of applicants by status
  const renderApplicants = (status) => {
    const filteredApplicants = applicants.filter(
      (applicant) => applicant.status === status
    );
    return filteredApplicants.length > 0 ? (
      filteredApplicants.map((applicant) => (
        <div
          key={applicant.id}
          className="border p-4 rounded-md mb-2 flex justify-between items-center"
        >
          <p>{applicant.name}</p>
          {status === "pending" ? (
            <button
              onClick={() => setSelectedApplicant(applicant)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Details
            </button>
          ) : status === "declined" ? (
            <p className="text-red-500">{applicant.message}</p>
          ) : null}
        </div>
      ))
    ) : (
      <p className="text-gray-500">No {status} applications found.</p>
    );
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded ${
            activeTab === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`px-4 py-2 rounded ${
            activeTab === "approved" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => setActiveTab("declined")}
          className={`px-4 py-2 rounded ${
            activeTab === "declined" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          Declined
        </button>
      </div>

      {/* Render Section */}
      {activeTab === "pending" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Pending Applications</h2>
          {renderApplicants("pending")}
        </div>
      )}
      {activeTab === "approved" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Approved Applications</h2>
          {renderApplicants("approved")}
        </div>
      )}
      {activeTab === "declined" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Declined Applications</h2>
          {renderApplicants("declined")}
        </div>
      )}

      {/* Selected Applicant Details */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center pt-4">
          <div className="bg-white p-6 rounded-lg w-2/3">
            <h2 className="text-xl font-bold mb-4">
              Application Details: {selectedApplicant.name}
            </h2>

            {/* Document Sections */}
            {Object.entries(selectedApplicant.documents).map(([section, docs]) => (
              <div key={section} className="mb-4">
                <h3 className="font-bold text-lg capitalize">{section} Docs</h3>
                <ul className="list-disc list-inside">
                  {typeof docs === "object" && !Array.isArray(docs)
                    ? Object.entries(docs).map(([key, value]) => (
                        <li key={key}>
                          {key}:{" "}
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {value}
                          </a>
                        </li>
                      ))
                    : Array.isArray(docs)
                    ? docs.map((doc, index) => (
                        <li key={index}>
                          <a
                            href={doc}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {doc}
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            ))}

            {/* Approve/Decline Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleApprove(selectedApplicant.id)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
              <button
                onClick={() =>
                  handleDecline(selectedApplicant.id, declineMessage)
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Decline
              </button>
            </div>

            {/* Decline Message */}
            <textarea
              placeholder="Enter reason for decline"
              value={declineMessage}
              onChange={(e) => setDeclineMessage(e.target.value)}
              className="w-full mt-4 p-2 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanApplicants;
