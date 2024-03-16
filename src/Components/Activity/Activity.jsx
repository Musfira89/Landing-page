import React, { useState } from "react";
import { activities } from "./constant.js";
import ActivityCard from "./ActivityCard";

const Activity = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  return (
    <div className="text-center pt-40">
    {/* Heading */}
    <h2 className="text-2xl lg:text-5xl text-blue-400 font-bold mb-4">
    ACTIVITY CARDS  </h2>

    {/* Paragraph */}
    <p className="text-gray-600 mb-6">
    Explore a variety of engaging activities to support your child's development
    </p>
    <div className="flex flex-wrap justify-center items-center pb-36 pt-12 gap-1 rounded-3xl">
      {(showAll ? activities : activities.slice(0, 3)).map((activity) => (
        <div key={activity.id} className="w-full md:w-1/4 px-2">
          <ActivityCard
            imageUrl={activity.imageUrl}
            heading={activity.heading}
            description={activity.description}
          />
        </div>
      ))}
      {!showAll ? (
        <div className="w-full text-center mt-5">
          <button
            onClick={handleViewMore}
            className="bg-white border border-blue-400  text-blue-400 font-bold py-4 px-12 rounded-full"
          >
            View More
          </button>
        </div>
      ) : (
        <div className="w-full text-center mt-5">
          <button
            onClick={handleViewLess}
            className="bg-white border border-blue-400  text-blue-400 font-bold py-4 px-12 rounded-full"
          >
            View Less
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Activity;
