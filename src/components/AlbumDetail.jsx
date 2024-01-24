import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiContext } from "../context/ApiContextProvider";

const AlbumDetail = () => {
  const { getOneApi2, oneApi2 } = useContext(apiContext);
  const { id } = useParams();
  useEffect(() => {
    getOneApi2(id);
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
      <h2>{oneApi2.id}</h2>
      <h2>{oneApi2.title}</h2>
    </div>
  );
};
export default AlbumDetail;
