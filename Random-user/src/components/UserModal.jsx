import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function UserModal({ user, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-md rounded-2xl bg-amber-50 p-6 shadow-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16  ">
            <img className="rounded-full " src={user.picture.large} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-sm text-gray-700">{user.gender}</p>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs text-gray-600">Location</p>
            <p>
              {user.location.city}, {user.location.state},{" "}
              {user.location.country}
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
    </div>,
    document.getElementById("modal-root"),
  );
}
