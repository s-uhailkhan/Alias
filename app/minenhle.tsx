import React, { useState } from "react";
import {
  Camera,
  Pencil,
  Plus,
  MoreHorizontal,
  MessageCircle,
  ThumbsUp,
  Share2,
  MapPin,
  Briefcase,
  GraduationCap,
  Home,
  Heart,
} from "lucide-react";

// ---------- Types ----------
type Photo = {
  id: number;
  url: string;
};

type Friend = {
  id: number;
  name: string;
  avatar: string;
};

type Post = {
  id: number;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
};

type LikedPosts = Record<number, boolean>;

// ---------- Mock data ----------
const COVER_PHOTO: string =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=400&fit=crop";
const AVATAR: string =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop";

const PHOTOS: Photo[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=300&fit=crop" },
  { id: 2, url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=300&fit=crop" },
  { id: 3, url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=300&fit=crop" },
  { id: 4, url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop" },
  { id: 5, url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=300&fit=crop" },
  { id: 6, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop" },
];

const FRIENDS: Friend[] = [
  { id: 1, name: "Thando Mkhize", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop" },
  { id: 2, name: "Sipho Dlamini", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
  { id: 3, name: "Ayanda Zulu", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop" },
  { id: 4, name: "Lindiwe Nkosi", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
  { id: 5, name: "Bongani Khumalo", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" },
  { id: 6, name: "Nomvula Cele", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop" },
];

const POSTS: Post[] = [
  {
    id: 1,
    time: "3h",
    text: "Great weekend in Durban 🌊 Feeling grateful for good friends and good weather!",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop",
    likes: 128,
    comments: 24,
    shares: 6,
  },
  {
    id: 2,
    time: "2d",
    text: "New week, new goals. Let's get it 💪",
    likes: 54,
    comments: 9,
    shares: 1,
  },
];

const TABS: string[] = ["Posts", "About", "Friends", "Photos"];

// ---------- Component ----------
export default function Minenhle(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("Posts");
  const [likedPosts, setLikedPosts] = useState<LikedPosts>({});

  const toggleLike = (id: number): void => {
    setLikedPosts((prev) => ({...prev, [id]:!prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#050505]">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 h-14 flex items-center px-4 shadow-sm">
        <span className="text-[#1877f2] font-bold text-2xl">facebook</span>
      </div>

      {/* Cover + profile header */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[940px] mx-auto">
          {/* Cover photo */}
          <div className="relative h-[350px] rounded-b-lg overflow-hidden bg-gray-300">
            <img
              src={COVER_PHOTO}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 hover:bg-white px-3 py-1.5 rounded-md text-sm font-semibold shadow">
              <Camera size={16} />
              Edit cover photo
            </button>
          </div>

          {/* Avatar + name row */}
          <div className="relative px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-[76px] sm:-mt-16">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="relative w-[168px] h-[168px] rounded-full ring-4 ring-white bg-gray-200 overflow-hidden shrink-0">
                  <img
                    src={AVATAR}
                    alt="Minenhle's profile"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 ring-2 ring-white">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="pb-2 sm:pb-3 text-center sm:text-left">
                  <h1 className="text-3xl font-bold leading-tight">Minenhle</h1>
                  <p className="text-gray-500 font-medium mt-1">
                    {FRIENDS.length} friends
                  </p>
                  <div className="flex -space-x-2 mt-2 justify-center sm:justify-start">
                    {FRIENDS.slice(0, 6).map((f) => (
                      <img
                        key={f.id}
                        src={f.avatar}
                        alt={f.name}
                        className="w-8 h-8 rounded-full ring-2 ring-white object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:pb-3">
                <button className="flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe0] text-white font-semibold px-4 py-2 rounded-md">
                  <Plus size={18} />
                  Add to story
                </button>
                <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 font-semibold px-4 py-2 rounded-md">
                  <Pencil size={16} />
                  Edit profile
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 p-2.5 rounded-md">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mt-3 border-t border-gray-200 pt-1 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-semibold text-[15px] border-b-[3px] whitespace-nowrap transition-colors ${
                    activeTab === tab
                     ? "border-[#1877f2] text-[#1877f2]"
                      : "border-transparent text-gray-500 hover:bg-gray-100 rounded-t-md"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[940px] mx-auto px-4 py-4">
        {activeTab === "Posts" && (
          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-4">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              {/* Intro card */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="font-bold text-xl mb-3">Intro</h2>
                <ul className="flex flex-col gap-3 text-[15px]">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Briefcase size={20} className="text-gray-500 shrink-0" />
                    Works at Freelance Developer
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <GraduationCap size={20} className="text-gray-500 shrink-0" />
                    Studied at Careers Business Institute
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Home size={20} className="text-gray-500 shrink-0" />
                    Lives in Durban, South Africa
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <MapPin size={20} className="text-gray-500 shrink-0" />
                    From Durban, South Africa
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Heart size={20} className="text-gray-500 shrink-0" />
                    Single
                  </li>
                </ul>
                <button className="w-full mt-3 bg-gray-200 hover:bg-gray-300 font-semibold py-1.5 rounded-md">
                  Edit details
                </button>
              </div>

              {/* Photos card */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-xl">Photos</h2>
                  <button className="text-[#1877f2] font-semibold text-sm hover:underline">
                    See all photos
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {PHOTOS.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.url}
                      alt="User upload"
                      className="w-full aspect-square object-cover rounded-md cursor-pointer hover:opacity-90"
                    />
                  ))}
                </div>
              </div>

              {/* Friends card */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-xl">Friends</h2>
                  <button className="text-[#1877f2] font-semibold text-sm hover:underline">
                    See all friends
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-3">
                  {FRIENDS.length} friends
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {FRIENDS.map((friend) => (
                    <div key={friend.id} className="cursor-pointer">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-full aspect-square object-cover rounded-md"
                      />
                      <p className="text-[13px] font-semibold mt-1 truncate">
                        {friend.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: composer + feed */}
            <div className="flex flex-col gap-4">
              {/* Post composer */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                  <img
                    src={AVATAR}
                    alt="Minenhle"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <button className="flex-1 text-left bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2.5 text-gray-500">
                    What's on your mind, Minenhle?
                  </button>
                </div>
                <div className="flex justify-around pt-2">
                  <button className="flex items-center gap-2 text-gray-500 font-semibold text-sm px-3 py-1.5 rounded-md hover:bg-gray-100">
                    🎥 Live video
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 font-semibold text-sm px-3 py-1.5 rounded-md hover:bg-gray-100">
                    🖼️ Photo/video
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 font-semibold text-sm px-3 py-1.5 rounded-md hover:bg-gray-100">
                    😊 Feeling/activity
                  </button>
                </div>
              </div>

              {/* Feed */}
              {POSTS.map((post) => {
                const liked =!!likedPosts[post.id];
                const likeCount = post.likes + (liked? 1 : 0);
                return (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={AVATAR}
                          alt="Minenhle"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-[15px] leading-tight">
                            Minenhle
                          </p>
                          <p className="text-xs text-gray-500">{post.time} · 🌍</p>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>

                    <p className="text-[15px] mb-3">{post.text}</p>

                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full rounded-md mb-2 object-cover max-h-[420px]"
                      />
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500 px-1 py-1.5 border-b border-gray-200">
                      <span>{likeCount > 0? `👍 ${likeCount}` : ""}</span>
                      <span>
                        {post.comments} comments · {post.shares} shares
                      </span>
                    </div>

                    <div className="flex items-center justify-around pt-1">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 flex-1 justify-center py-1.5 rounded-md font-semibold text-sm hover:bg-gray-100 ${
                          liked? "text-[#1877f2]" : "text-gray-600"
                        }`}
                      >
                        <ThumbsUp size={18} fill={liked? "#1877f2" : "none"} />
                        Like
                      </button>
                      <button className="flex items-center gap-2 flex-1 justify-center py-1.5 rounded-md font-semibold text-sm text-gray-600 hover:bg-gray-100">
                        <MessageCircle size={18} />
                        Comment
                      </button>
                      <button className="flex items-center gap-2 flex-1 justify-center py-1.5 rounded-md font-semibold text-sm text-gray-600 hover:bg-gray-100">
                        <Share2 size={18} />
                        Share
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "About" && (
          <div className="bg-white rounded-lg shadow-sm p-4 max-w-[680px] mx-auto">
            <h2 className="font-bold text-xl mb-3">About</h2>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li className="flex items-center gap-3 text-gray-700">
                <Briefcase size={20} className="text-gray-500 shrink-0" />
                Works at Freelance Developer
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <GraduationCap size={20} className="text-gray-500 shrink-0" />
                Studied at Careers Business Institute
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Home size={20} className="text-gray-500 shrink-0" />
                Lives in Durban, South Africa
              </li>
            </ul>
          </div>
        )}

        {activeTab === "Friends" && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-bold text-xl mb-3">
              Friends · {FRIENDS.length}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {FRIENDS.map((friend) => (
                <div
                  key={friend.id}
                  className="cursor-pointer bg-gray-50 rounded-lg overflow-hidden"
                >
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-full aspect-square object-cover"
                  />
                  <p className="text-sm font-semibold p-2 truncate">
                    {friend.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Photos" && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-bold text-xl mb-3">Photos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {PHOTOS.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt="User upload"
                  className="w-full aspect-square object-cover rounded-md cursor-pointer hover:opacity-90"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}