import React from "react";

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="w-sm h-70 rounded-2xl bg-white p-6 shadow-lg hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16  ">
          <img className="rounded-full " src={user.picture.large} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm text-gray-700">{user.gender}</p>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-xs text-gray-600">Location</p>
          <p>
            {user.location.city}, {user.location.state}, {user.location.country}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-600">Email</p>
          <p>{user.email}</p>
        </div>

        <div>
          <p className="text-xs text-gray-600">Phone</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
