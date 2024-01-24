import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvider";
import { useParams } from "react-router-dom";

const UsersDetail = () => {
  const { getOneApi, oneApi } = useContext(apiContext);
  const { id } = useParams();
  useEffect(() => {
    getOneApi(id);
  }, [id]);

  return (
    <div
      style={{
        border: "2px solid black",
        backgroundColor: "wheat",
        opacity: "0.7",
        width: "350px",
        display: "inline-block",
        marginTop: "50px",
      }}
    >
      <h2>{oneApi.name}</h2>
      <h2>{oneApi.username}</h2>
      <h3>{oneApi.email}</h3>
      <h3>{oneApi.phone}</h3>
      <h3>{oneApi.website}</h3>
    </div>
  );
};

export default UsersDetail;
