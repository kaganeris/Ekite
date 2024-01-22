import React, { createContext, useState, useEffect, useContext } from "react";
import ProfileService from "../services/ProfileService";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { setToken, token, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchData = async (employeeId) => {
    try {
      const data = await ProfileService.getDetailPersonelById(employeeId);
      console.log(data);
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        console.log(token);
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("fetchdata", error);
      setLoading(false);
      setToken("");
    }
  };

  const getDirectorById = async (directorId) => {
    try {
      const data = await ProfileService.getDetailDirectorById(directorId);
      console.log(data);
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        console.log(token);
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("fetchdata", error);
      setLoading(false);
      setToken("");
    }
  };

  const updatePersonelData = async (employeeId) => {
    try {
      const data = await ProfileService.getUpdatePersonelByID(employeeId);
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const updateDirectorData = async (directorId) => {
    try {
      const data = await ProfileService.getUpdateDirectorByID(directorId);
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const putPersonelData = async (employeeId, updateData) => {
    try {
      const data = await ProfileService.putUpdatePersonelById(
        employeeId,
        updateData
      );
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const putDirectorData = async (directorId, updateData) => {
    try {
      const data = await ProfileService.putUpdateDirectorById(
        directorId,
        updateData
      );
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const getSiteOwnerById = async (siteOwnerId) => {
    try {
      const data = await ProfileService.getDetailSiteOwnerById(siteOwnerId);
      console.log(data);
      if (data.status === 200) {
        setLoading(false);
        return data.data;
      } else {
        console.log(token);
        if (token === "") {
          setIsAuthenticated(false);
        }
        setToken("");
        navigate("/login");
      }
    } catch (error) {
      console.log("fetchdata", error);
      setLoading(false);
      setToken("");
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        loading,
        fetchData,
        updatePersonelData,
        putPersonelData,
        getDirectorById,
        updateDirectorData,
        putDirectorData,
        getSiteOwnerById
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
