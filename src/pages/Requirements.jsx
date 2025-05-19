const Requirements = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Visa Requirements</h2>
      
      <div className="space-y-6">
        {/* Basic Information Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Visa Type:</p>
              <p className="text-gray-600">Tourist Visa</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Processing Time:</p>
              <p className="text-gray-600">10-15 business days</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Visa Fee:</p>
              <p className="text-gray-600">$50-$200</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Visa Validity:</p>
              <p className="text-gray-600">30-90 days</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-medium text-gray-700">Application Method:</p>
              <p className="text-gray-600">Online or Embassy submission</p>
            </div>
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Required Documents</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span className="text-gray-600">Valid passport (6 months validity)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span className="text-gray-600">Passport-sized photographs</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span className="text-gray-600">Proof of accommodation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span className="text-gray-600">Travel itinerary</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span className="text-gray-600">Financial proof (bank statements)</span>
            </li>
          </ul>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Eligibility Criteria</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-700">Age Restriction:</p>
              <p className="text-gray-600">Minimum 18 years (varies by country)</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Description:</p>
              <p className="text-gray-600">
                Tourist visas are typically granted for short-term visits for leisure, sightseeing, 
                or visiting friends and family. Applicants must demonstrate sufficient funds for their stay 
                and intention to return to their home country.
              </p>
            </div>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Application Process</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-600">Complete the visa application form</li>
            <li className="text-gray-600">Gather all required documents</li>
            <li className="text-gray-600">Pay the visa application fee</li>
            <li className="text-gray-600">Submit your application (online or in-person)</li>
            <li className="text-gray-600">Wait for processing (typically 2-3 weeks)</li>
            <li className="text-gray-600">Receive your visa decision</li>
          </ol>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded">
            <p className="text-blue-700">
              <span className="font-medium">Note:</span> Processing times may vary depending on the embassy 
              and time of year. Apply well in advance of your planned travel date.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Requirements;