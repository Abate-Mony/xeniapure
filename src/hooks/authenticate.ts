import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser, setUser as setLoginUser } from "../actions/userSlice.js";
import { isAxiosError } from "axios";
import customFetch from "@/components/utils/customFetch";
import toast from "react-hot-toast";

export default function useAuthenticalUser() {
      const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const loginUser = async () => {
        try {
            const { data } = await customFetch.get("/users/current-user");
              const { user } = data;
              dispatch(setLoginUser(user));
            console.error(data)
        } catch (err) {
            if (isAxiosError(err)) {
                // toast.error(err.response?.data?.msg || "Login failed.");
                console.log(err)
              } else {
                console.error("Login error:", err);
              }
            
        }
    };
    const logOut = async (error: string = "") => {
        try {
            await customFetch.get("/auth/logout");
            navigate("/login?message=" + error);
            toast.success("successfully logout")
              dispatch(removeUser());
            await queryClient.removeQueries();
        } catch (err) {
            if (isAxiosError(err)) {
                // alert("fail to logout")
                toast.error("fail to logout")
            }
            // alert("fail to logout !!!");
            // console.log("this is the fail response here", err.response?.data);
        }
    };
    return {
        loginUser,
        logOut,
    };
}


