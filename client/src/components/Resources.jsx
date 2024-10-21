import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";

const resources = [
  {
    id: 1,
    title: "Relocating Your Home Office: A 6-Week Stress-Free Moving Guide",
    description:
      "Moving is always an adventure, but when your home office is on the line, it’s time to kick your organization...",
    image: "/location1.jpeg",
    date: "August 21, 2024",
    link: "#",
  },
  {
    id: 2,
    title:
      "For Richer and For Poorer: How Moving Patterns of Americans Differ by Income Level",
    description:
      "Overall Findings America’s bottom 20% of earners are 32% more likely to move than their top-earning...",
    image: "/location2.webp",
    date: "August 13, 2024",
    link: "#",
  },
  {
    id: 3,
    title: "House Hunting While Expecting? Don’t Forget About These Things",
    description:
      "House hunting can be quite a process on its own — knowing that your family is about to get bigger makes it...",
    image: "/location3.webp",
    date: "August 10, 2024",
    link: "#",
  },
  {
    id: 4,
    title: "Tips to Prepare for Your Move",
    description:
      "The process of uprooting your life and moving to a new location or even a short distance is an experience...",
    image: "/location4.webp",
    date: "August 3, 2024",
    link: "#",
  },
];

const Resources = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("ooo", blogs);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs`);
        setBlogs(response?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Popular Moving Resources
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Got moving questions? We’ve got moving answers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs?.map((resource) => (
            <div key={resource.id} className="">
              <Card className="py-4 h-[380px]">
                <CardHeader className="pb-3 pt-2 px-4 flex-col items-start">
                  <div></div>
                  <img
                    alt=""
                    className="object-cover h-[170px] w-full rounded-xl"
                    src={resource.mainImage}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 ">
                  <Link
                    to={`/blog/${resource._id}`}
                    className="text-tiny uppercase font-bold hover:text-blue-500 duration-150 cursor-pointer"
                  >
                    Read more
                  </Link>
                  <small className="text-default-500">
                    {new Date(resource.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </small>
                  <h4 className="font-bold text-large">{resource.title}</h4>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
