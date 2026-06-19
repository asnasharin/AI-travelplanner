import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-slate-800"
        >
          ✈️ Travel Planner
        </Link>

        <div className="flex items-center gap-4">

          {user && (
            <>
              <Link
                to="/generate"
                className="text-slate-800 font-semibold hover:text-sky-700"
              >
                Generate
              </Link>

              <Link
                to="/history"
                className="text-slate-800 font-semibold hover:text-sky-700"
              >
                History
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-white text-sky-700 px-4 py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-sky-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="font-medium text-slate-800">
                {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;