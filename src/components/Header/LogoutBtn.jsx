import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate('/')
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-900 rounded-full"
      onClick={() => logoutHandle()}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
