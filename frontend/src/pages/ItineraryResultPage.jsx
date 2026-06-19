import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItineraryById } from "../services/itineraryService";

export default function ResultPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getItineraryById(id);
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-50">
        <p className="text-lg text-gray-600 animate-pulse">Generating your trip...</p>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No itinerary found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-sky-700">
            ✈️ Your AI Travel Itinerary
          </h1>
          <p className="text-gray-500 mt-2">
            Personalized trip plan generated for you
          </p>
        </div>

        {/* ITINERARY */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-sky-100">
          <h2 className="text-xl font-semibold text-sky-700 mb-4">
            🗓️ Daily Itinerary
          </h2>

          <div className="space-y-4">
            {data.aiOutput?.itinerary?.length > 0 ? (
              data.aiOutput.itinerary.map((day, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-gradient-to-r from-sky-50 to-white border border-sky-100 hover:shadow-md transition"
                >
                  <p className="font-bold text-sky-700 mb-1">
                    Day {day.day || i + 1}
                  </p>

                  <p className="text-gray-700">
                    {day.plan || JSON.stringify(day)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No itinerary available</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}