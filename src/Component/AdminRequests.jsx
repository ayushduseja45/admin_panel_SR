import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../App";

const AdminRequests = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const getAdminsList = async () => {
      try {
        const res = await axios.get(`${BackendUrl}/admin_list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res.data);
        setAdmins(res.data.adminList);
      } catch (error) {}
    };
    getAdminsList();
  }, []);

  // Initial Data for Admins

  // Initial Data for Super Admins
  const [superAdmins, setSuperAdmins] = useState([]);

  // Initial Data for Approved Admins
  const [approvedAdmins, setApprovedAdmins] = useState([]);

  // Track which dropdown is open
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Handle Approve Action
  const handleApprove = (id) => {
    const acceptAdminRequest = async () => {
      try {
        const res = await axios.post(`${BackendUrl}/accept_admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res.data);
      } catch (error) {}
    };
  };

  // Handle Delete Action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      setAdmins(admins.filter((admin) => admin.id !== id)); // Remove from Admin list
    }
  };

  // Handle Make Super Admin Action
  const handleMakeSuperAdmin = (id) => {
    const selectedAdmin = admins.find((admin) => admin.id === id);
    if (selectedAdmin) {
      setAdmins(admins.filter((admin) => admin.id !== id)); // Remove from Admin list
      setSuperAdmins([...superAdmins, selectedAdmin]); // Add to Super Admin list
    }
  };

  // Handle Remove from Super Admins Action
  const handleRemoveSuperAdmin = (id) => {
    const selectedSuperAdmin = superAdmins.find(
      (superAdmin) => superAdmin.id === id
    );
    if (selectedSuperAdmin) {
      setSuperAdmins(superAdmins.filter((superAdmin) => superAdmin.id !== id)); // Remove from Super Admin list
      setAdmins([...admins, selectedSuperAdmin]); // Add back to Admin list
    }
  };

  // Handle Remove from Approved Admins Action
  const handleRemoveApprovedAdmin = (id) => {
    setApprovedAdmins(approvedAdmins.filter((admin) => admin.id !== id)); // Remove from Approved Admin list
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Management</h2>

      {/* Admins List */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Admins</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Email
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.id} className="border-t">
                  <td className="py-2 px-4">{admin.name}</td>
                  <td className="py-2 px-4">{admin.email}</td>
                  <td className="py-2 px-4 flex justify-center space-x-2 items-center">
                    {/* Approve Button */}
                    <button
                      onClick={() => handleApprove(admin.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(admin.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>

                    {/* Dropdown for "Three Dots" Menu */}
                    <div className="relative">
                      <button
                        onClick={() =>
                          setDropdownOpen(
                            dropdownOpen === admin.id ? null : admin.id
                          )
                        }
                        className="bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300"
                      >
                        &#x22EE; {/* Vertical Ellipsis */}
                      </button>
                      {dropdownOpen === admin.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg">
                          <button
                            onClick={() => handleMakeSuperAdmin(admin.id)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Make Super Admin
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No admins available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Approved Admins List */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Approved Admins</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Email
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {approvedAdmins.length > 0 ? (
              approvedAdmins.map((admin) => (
                <tr key={admin.id} className="border-t">
                  <td className="py-2 px-4">{admin.name}</td>
                  <td className="py-2 px-4">{admin.email}</td>
                  <td className="py-2 px-4 flex justify-center space-x-2 items-center">
                    {/* Remove from Approved Admins */}
                    <button
                      onClick={() => handleRemoveApprovedAdmin(admin.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No approved admins available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Super Admins List */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Super Admins</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Email
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {superAdmins.length > 0 ? (
              superAdmins.map((superAdmin) => (
                <tr key={superAdmin.id} className="border-t">
                  <td className="py-2 px-4">{superAdmin.name}</td>
                  <td className="py-2 px-4">{superAdmin.email}</td>
                  <td className="py-2 px-4 flex justify-center space-x-2 items-center">
                    {/* Remove from Super Admins */}
                    <button
                      onClick={() => handleRemoveSuperAdmin(superAdmin.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                    >
                      Remove Super Admin
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No super admins available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRequests;
