import { FaStar } from "react-icons/fa";

// Sample user reviews data
const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    country: "USA",
    rating: 5,
    comment: "Very smooth and fast process. Highly recommended!",
  },
  {
    id: 2,
    name: "Mohammed Al-Khalifa",
    country: "UAE",
    rating: 4,
    comment: "Great service, but I wish the visa arrived a little sooner.",
  },
  {
    id: 3,
    name: "Sophia Müller",
    country: "Germany",
    rating: 5,
    comment: "Excellent experience from start to finish!",
  },
];

export default function Reviews() {
  return (
    <div className="p-6 bg-gray-50  dark:bg-gray-700 dark:text-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">What Our Users Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition"
          >
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{review.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-300">({review.country})</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                    size={16}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
