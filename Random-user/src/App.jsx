import { useState,useMemo } from "react";
import { useUser } from "./hooks/useUser";
import "./App.css";
import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";
import UserModal from "./components/userModal";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [selectedUser, setSeletedUser] = useState(null);
  const [genderfilter , setGenderfilter] = useState('All');
  const { user, error, loading,totalpage,totalItems, fetch } = useUser(page, 10);

  const filteredUser = useMemo(()=>{
    if(genderfilter === 'All') return user;
    return user.filter((user)=> user.gender === genderfilter);
  },[user, genderfilter]);

  const handlePageChange = (page) => {
    setPage(page);
  }
  return (
    <>
      <div className="bg-blue-950 min-w-md min-h-screen flex-col justify-center items-center">
        <div className="  mb-2 p-2 flex gap-1 justify-end items-center">
          <Pagination
            page={page}
            totalpage={totalpage}
            onChange={handlePageChange}
          />
          <div className="text-white text-xl font-semibold ">
            Gender Filter:
          </div>
          {["All", "male", "female"].map((option) => (
            <button
              key={option}
              onClick={() => setGenderfilter(option)}
              className={`px-4 py-2 rounded-md text-white ${
                genderfilter === option
                  ? "bg-blue-600 text-white"
                  : "bg-blue-400 text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className=" mt-2 py-4  flex flex-wrap  items-center gap-3 justify-evenly ">
          {error && <h2>{error}</h2>}
          {loading &&
            Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          {user &&
            !loading &&
            filteredUser.map((user) => (
              <UserCard
                key={user.login.uuid}
                user={user}
                onClick={() => setSeletedUser(user)}
              />
            ))}
          {selectedUser && (
            <UserModal
              user={selectedUser}
              onClose={() => setSeletedUser(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
