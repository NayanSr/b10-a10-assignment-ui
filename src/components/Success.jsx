import { FaPassport } from "react-icons/fa";

// Sample upcoming visas data
const upcomingVisas = [
  {
    id: 1,
    name: "John Doe",
    destination: "Japan",
    issueDate: "2025-06-01",
    expiryDate: "2025-12-01",
    visaRef: "JP-EVISA-2025-0001",
  },
  {
    id: 2,
    name: "Jane Smith",
    destination: "Germany",
    issueDate: "2025-06-05",
    expiryDate: "2025-11-30",
    visaRef: "DE-EVISA-2025-0002",
  },
  {
    id: 3,
    name: "Alex Chen",
    destination: "Australia",
    issueDate: "2025-06-10",
    expiryDate: "2025-12-15",
    visaRef: "AU-EVISA-2025-0003",
  },
];

export default function Success() {
  return (
    <div className="p-6 bg-gray-50  dark:bg-gray-700 dark:text-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:bg-gray-700 dark:text-white">Upcoming Visas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingVisas.map((visa) => (
          <div
            key={visa.id}
            className="dark:bg-gray-700 dark:text-white bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaPassport className="text-blue-600" size={30} />
              <div className="dark:bg-gray-700 dark:text-white">
                <h3 className="text-lg font-semibold text-gray-700 dark:bg-gray-700 dark:text-white">{visa.name}</h3>
                <p className="text-sm text-gray-500 dark:bg-gray-700 dark:text-white">Destination: {visa.destination}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p className="dark:bg-gray-700 dark:text-white"><strong>Visa Ref:</strong> {visa.visaRef}</p>
              <p className="dark:bg-gray-700 dark:text-white"><strong>Issue Date:</strong> {visa.issueDate}</p>
              <p className="dark:bg-gray-700 dark:text-white"><strong>Expiry Date:</strong> {visa.expiryDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
