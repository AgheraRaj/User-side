import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Badge, Loader, Paper, Text, Group } from "@mantine/core";
import { Calendar, DollarSign } from "lucide-react";

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [closingContractId, setClosingContractId] = useState(null);

  const getRoleFromToken = (authToken) => {
    try {
        const decoded = jwtDecode(authToken);
        return decoded.role; // Assuming role is in the payload
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};


const authToken = localStorage.getItem('token');
const role = getRoleFromToken(authToken);
  // console.log(role);

  const handleCloseContract = async (contractId) => {
    try {
      setClosingContractId(contractId);
      await axios.put(`${import.meta.env.VITE_API_URL}/contract/status/${contractId}`, {
        status: 'CLOSED'
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Update the local state to reflect the change
      setContracts(contracts.map(contract =>
        contract.id === contractId
          ? { ...contract, status: 'CLOSED' }
          : contract
      ));
    } catch (error) {
      console.error('Error closing contract:', error);
    } finally {
      setClosingContractId(null);
    }
  };

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/contract/myContract`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setContracts(response.data);
      } catch (error) {
        console.error('Error fetching contracts:', error);
        setError(error.response?.data?.message || 'Failed to fetch contracts');
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader color="#2E6F40" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Contracts</h1>
          <p className="text-gray-600 mt-2">Manage your active and past contracts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-6">
          {contracts.map((contract) => (
            <Paper
              key={contract.id}
              shadow="sm"
              p="lg"
              radius="md"
              className="hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div>
                    <Text size="xl" fw={600} className="text-gray-800">
                      {contract.jobsTitle}
                    </Text>
                    <Text size="sm" c="dimmed" className="mt-1 line-clamp-2">
                      {contract.jobsDescription}
                    </Text>
                  </div>

                  <Group>
                    <Badge
                      color={contract.status === 'ACTIVE' ? 'green' : 'gray'}
                      size="lg"
                      variant="light"
                    >
                      {contract.status}
                    </Badge>
                  </Group>

                  <div className="space-y-2">
                    <Group>
                      <Calendar size={18} className="text-gray-400" />
                      <Text size="sm" c="dimmed">
                        Start Date: {new Date(contract.startDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Text>
                    </Group>
                    <Group>
                      <Calendar size={18} className="text-gray-400" />
                      <Text size="sm" c="dimmed">
                        End Date: {new Date(contract.endDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Text>
                    </Group>
                  </div>

                  <div className="space-y-1">
                    <Text size="sm" fw={500}>
                      Client: <span className="text-gray-600">{contract.clientName}</span>
                    </Text>
                    <Text size="sm" fw={500}>
                      Freelancer: <span className="text-gray-600">{contract.freelancerName}</span>
                    </Text>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center">
                    <DollarSign size={24} className="text-[#2E6F40]" />
                    <Text size="xl" fw={700} className="text-[#2E6F40]">
                      {contract.amount}
                    </Text>
                  </div>

                  {contract.status === 'ACTIVE' && role === "CLIENT" && (
                    <button
                      onClick={() => handleCloseContract(contract.id)}
                      disabled={closingContractId === contract.id}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      {closingContractId === contract.id ? 'Closing...' : 'Close Contract'}
                    </button>
                  )}
                </div>
              </div>
            </Paper>
          ))}
        </div>

        {contracts.length === 0 && (
          <div className="text-center py-12">
            <Text c="dimmed">No contracts found.</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;