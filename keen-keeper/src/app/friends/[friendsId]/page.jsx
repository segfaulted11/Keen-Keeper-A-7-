"use client";
import {
  Archive,
  Bell,
  Camera,
  Link,
  MessageCircle,
  PhoneCall,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { useTimeline } from "@/app/context/TimelineContext";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const friends = [
  {
    id: 1,
    name: "Sarah Ahmed",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "sarah.ahmed@gmail.com",
    days_since_contact: 21,
    status: "overdue",
    tags: ["university", "close friend"],
    bio: "Met during first year at university. We often study together and share book recommendations.",
    goal: 14,
    next_due_date: "2026-06-01",
  },
  {
    id: 2,
    name: "Michael Turner",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "michael.turner@gmail.com",
    days_since_contact: 10,
    status: "on-track",
    tags: ["coworker", "tech"],
    bio: "Former internship teammate who now works as a frontend developer. We exchange coding tips regularly.",
    goal: 14,
    next_due_date: "2026-06-12",
  },
  {
    id: 3,
    name: "Aisha Rahman",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "aisha.rahman@gmail.com",
    days_since_contact: 13,
    status: "almost due",
    tags: ["school", "creative"],
    bio: "High school friend who runs a small photography business and loves traveling.",
    goal: 14,
    next_due_date: "2026-06-09",
  },
  {
    id: 4,
    name: "David Kim",
    picture: "https://randomuser.me/api/portraits/men/71.jpg",
    email: "david.kim@gmail.com",
    days_since_contact: 35,
    status: "overdue",
    tags: ["gaming", "online friend"],
    bio: "Met through an online gaming community. We usually catch up over weekend gaming sessions.",
    goal: 21,
    next_due_date: "2026-05-25",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
    email: "nusrat.jahan@gmail.com",
    days_since_contact: 4,
    status: "on-track",
    tags: ["cousin", "family"],
    bio: "Cousin who recently moved to another city. We stay connected through video calls.",
    goal: 14,
    next_due_date: "2026-06-18",
  },
  {
    id: 6,
    name: "Ethan Rodriguez",
    picture: "https://randomuser.me/api/portraits/men/19.jpg",
    email: "ethan.rodriguez@gmail.com",
    days_since_contact: 16,
    status: "almost due",
    tags: ["gym", "fitness"],
    bio: "Workout partner who keeps me accountable for fitness goals and healthy habits.",
    goal: 18,
    next_due_date: "2026-06-10",
  },
  {
    id: 7,
    name: "Priya Sharma",
    picture: "https://randomuser.me/api/portraits/women/57.jpg",
    email: "priya.sharma@gmail.com",
    days_since_contact: 28,
    status: "overdue",
    tags: ["college", "entrepreneur"],
    bio: "Started a small e-commerce business after graduation. We enjoy discussing startups and business ideas.",
    goal: 21,
    next_due_date: "2026-06-01",
  },
  {
    id: 8,
    name: "James Wilson",
    picture: "https://randomuser.me/api/portraits/men/52.jpg",
    email: "james.wilson@gmail.com",
    days_since_contact: 7,
    status: "on-track",
    tags: ["neighbor", "sports"],
    bio: "Neighbor and football enthusiast. We occasionally watch matches together.",
    goal: 14,
    next_due_date: "2026-06-15",
  },
  {
    id: 9,
    name: "Fatima Noor",
    picture: "https://randomuser.me/api/portraits/women/11.jpg",
    email: "fatima.noor@gmail.com",
    days_since_contact: 19,
    status: "almost due",
    tags: ["volunteering", "community"],
    bio: "Met while volunteering at a community education program. Passionate about social impact work.",
    goal: 21,
    next_due_date: "2026-06-10",
  },
  {
    id: 10,
    name: "Ryan Brooks",
    picture: "https://randomuser.me/api/portraits/men/83.jpg",
    email: "ryan.brooks@gmail.com",
    days_since_contact: 3,
    status: "on-track",
    tags: ["startup", "mentor"],
    bio: "A startup founder who mentors young developers and shares career advice.",
    goal: 14,
    next_due_date: "2026-06-19",
  },
];

const FriendsId = ({ params }) => {
  const { friendsId } = useParams();
  // console.log(friendsId)

  const expectedFriend = friends.find(
    (friend) => friend.id === parseInt(friendsId),
  );
  // console.log(expectedFriend)

  const { addActivity } = useTimeline();

const handleCall = () => {
  addActivity(expectedFriend, "call");

  toast.success(
    `Call with ${expectedFriend.name}!`
  );
};

const handleText = () => {
  addActivity(expectedFriend, "text");

  toast.success(
    `Text with ${expectedFriend.name}!`
  );
};

const handleVideo = () => {
  addActivity(expectedFriend, "video");

  toast.success(
    `Video call with ${expectedFriend.name}!`
  );
};
  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-3">
          {/* Profile Card */}
          <div className=" rounded-lg border p-8 text-center shadow-sm">
            <Image
              src={expectedFriend.picture}
              alt=""
              width={60}
              height={60}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h2 className="text-3xl font-semibold mb-2">
              {expectedFriend.name}
            </h2>

            <div
              className={`badge mx-auto
                     ${
                       expectedFriend.status === "on-track"
                         ? "badge-warning"
                         : expectedFriend.status === "overdue"
                           ? "badge-error"
                           : "badge-success"
                     }
                      `}
            >
              {expectedFriend.status}
            </div>

            <div className="flex gap-3">
              {expectedFriend.tags.map((tag, index) => {
                return (
                  <div className="badge badge-secondary" key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>

            <p className="italic mb-4">"{expectedFriend.bio}"</p>

            <p className="">{expectedFriend.email}</p>
          </div>

          {/* Actions */}
          <button className="w-full  border rounded-md py-3 font-medium flex justify-center gap-3">
            <Bell /> Snooze 2 Weeks
          </button>

          <button className="w-full  border rounded-md py-3 font-medium flex justify-center gap-3">
            <Archive /> Archive
          </button>

          <button className="w-full  border rounded-md py-3 font-medium flex justify-center gap-3">
            <Trash /> Delete
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" border rounded-lg p-6 text-center">
              <h3 className="text-5xl font-medium ">
                {expectedFriend.days_since_contact}
              </h3>

              <p className="mt-2">Days Since Contact</p>
            </div>

            <div className=" border rounded-lg p-6 text-center">
              <h3 className="text-5xl font-medium ">{expectedFriend.goal}</h3>

              <p className=" mt-2">Goal (Days)</p>
            </div>

            <div className=" border rounded-lg p-6 text-center">
              <h3 className="text-3xl font-semibold ">
                {expectedFriend.next_due_date}
              </h3>

              <p className=" mt-2">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className=" border rounded-lg p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Relationship Goal
                </h3>

                <p>
                  Connect every <strong>{expectedFriend.goal}</strong>
                </p>
              </div>

              <button className="px-4 py-2 btn btn-soft border rounded-md ">
                Edit
              </button>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className=" border rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={handleCall}
                className="border rounded-md py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-base-300"
              >
                <span className="text-2xl mb-2">
                  <PhoneCall />
                </span>
                <span>Call</span>
              </button>

              <button
               onClick={handleText}
                className="border rounded-md py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-base-300"
              >
                <span className="text-2xl mb-2">
                  <MessageCircle />
                </span>
                <span>Text</span>
              </button>

              <button
               onClick={handleVideo}
                className="border rounded-md py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-base-300"
              >
                <span className="text-2xl mb-2">
                  <Camera />
                </span>
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsId;
