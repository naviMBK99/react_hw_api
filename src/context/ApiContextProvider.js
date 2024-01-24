import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/const";
export const apiContext = createContext();
const ApiContextProvider = ({ children }) => {
  const [oneApi, setOneApi] = useState("");
  const [oneApi2, setOneApi2] = useState("");
  const INIT_STATE = {
    apiData: [],
    apiData2: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_API":
        return {
          ...state,
          apiData: action.payload,
        };
      case "GET_API2":
        return {
          ...state,
          apiData2: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !GET API
  const getApi = async () => {
    const { data } = await axios(`${API}/users`);
    dispatch({
      type: "GET_API",
      payload: data,
    });
  };
  useEffect(() => {
    getApi();
  }, []);
  const getApi2 = async () => {
    const { data } = await axios(`${API}/albums`);
    dispatch({
      type: "GET_API2",
      payload: data,
    });
  };
  useEffect(() => {
    getApi2();
  }, []);

  // ! getOneApi
  const getOneApi = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);
    setOneApi(data);
  };
  const getOneApi2 = async (id) => {
    const { data } = await axios(`${API}/albums/${id}`);
    setOneApi2(data);
  };

  const values = {
    apiData: state.apiData,
    apiData2: state.apiData2,
    getApi,
    getOneApi,
    oneApi,
    getApi2,
    oneApi2,
    getOneApi2,
  };
  return <apiContext.Provider value={values}>{children}</apiContext.Provider>;
};

export default ApiContextProvider;
