// src/components/Review.jsx
import React from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const Review = () => {
  const reviews = [
    {
      reviewer: "Nancy H",
      location: "Alexandria, VA",
      service: "Samuel Services",
      rating: 5,
      review:
        "Samuel Services was very communicative before and during the move. The movers arrived on time, did a great job, and the price for the move did not change from the original quote.",
      date: "6/14/2024",
      helpers: "2/hr",
      cost: "369",
      vehicle: "Truck",
    },
    {
      reviewer: "Trinh H",
      location: "Cape Coral, FL",
      service: "NTF Moving",
      rating: 5,
      review:
        "The guys were amazing! They were kind, respectful, hardworking, and patient. They quickly unloaded a full 26 trailer in the hot heat and still took the time to place everything where we asked-with a smile!",
      date: "7/6/2024",
      helpers: "3/hr",
      cost: "545",
      vehicle: "Truck",
    },
    {
      reviewer: "Michael B",
      location: "Austin, TX",
      service: "Texas Move Kings",
      rating: 4,
      review:
        "Texas Move Kings did a solid job. They were efficient and handled my belongings with care. There were a few minor hiccups, but nothing major.",
      date: "5/20/2024",
      helpers: "2/hr",
      cost: "420",
      vehicle: "Truck",
    },
    {
      reviewer: "Samantha P",
      location: "Los Angeles, CA",
      service: "Smooth Movers LA",
      rating: 5,
      review:
        "Smooth Movers LA were fantastic! They arrived on time, were very professional, and completed the move quickly. Highly recommend them!",
      date: "4/18/2024",
      helpers: "2/hr",
      cost: "600",
      vehicle: "Truck",
    },
    {
      reviewer: "Kevin L",
      location: "New York, NY",
      service: "Big Apple Movers",
      rating: 4,
      review:
        "Big Apple Movers provided a good service. They were a little late, but they made up for it by working quickly and carefully.",
      date: "3/30/2024",
      helpers: "3/hr",
      cost: "750",
      vehicle: "Truck",
    },
    {
      reviewer: "Lisa K",
      location: "Seattle, WA",
      service: "Emerald City Movers",
      rating: 5,
      review:
        "Emerald City Movers did a fantastic job. They handled all my fragile items with great care. I'm very satisfied with their service.",
      date: "2/15/2024",
      helpers: "2/hr",
      cost: "480",
      vehicle: "Truck",
    },
    {
      reviewer: "James R",
      location: "Chicago, IL",
      service: "Windy City Relocation",
      rating: 3,
      review:
        "The service was okay, but they were a bit rough with some of my items. Nothing broke, but I was worried about my more delicate belongings.",
      date: "1/10/2024",
      helpers: "2/hr",
      cost: "350",
      vehicle: "Truck",
    },
    {
      reviewer: "Emily W",
      location: "San Francisco, CA",
      service: "Bay Area Moving Co.",
      rating: 5,
      review:
        "Bay Area Moving Co. was amazing! They were friendly, professional, and got the job done quickly. They made moving stress-free.",
      date: "11/25/2023",
      helpers: "2/hr",
      cost: "700",
      vehicle: "Truck",
    },
    {
      reviewer: "William T",
      location: "Miami, FL",
      service: "Sunshine State Movers",
      rating: 4,
      review:
        "Good service overall. They were on time and worked hard. There was a small scratch on one of my tables, but it wasn't a big deal.",
      date: "10/22/2023",
      helpers: "3/hr",
      cost: "580",
      vehicle: "Truck",
    },
    {
      reviewer: "Olivia S",
      location: "Denver, CO",
      service: "Rocky Mountain Moving",
      rating: 5,
      review:
        "Rocky Mountain Moving was exceptional! They took great care of my things, and their team was very professional. Would definitely use them again.",
      date: "9/15/2023",
      helpers: "2/hr",
      cost: "520",
      vehicle: "Truck",
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Hundreds of Thousands of Real Customer Reviews
      </h2>
      <p className="text-center mb-6">
        On average, customers rate moves through HireAHelper 4.8 stars out of
        5.0 after 282,126 customer reviews
      </p>
      <div className="flex justify-center space-x-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-10 h-10 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .288l2.833 8.718h9.167l-7.416 5.384 2.833 8.718-7.417-5.384-7.416 5.384 2.833-8.718-7.416-5.384h9.166z" />
          </svg>
        ))}
      </div>
      <Marquee
        direction="left"
        play
        speed="30"
        pauseOnHover={true}
        className=" flex overflow-x-auto "
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer 10+
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        direction="right"
        play
        speed="30"
        pauseOnHover={true}
        className=" flex overflow-x-auto "
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer 10+
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default Review;
