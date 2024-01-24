import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvider";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Album = () => {
  const { getApi2, apiData2 } = useContext(apiContext);
  useEffect(() => {
    getApi2();
  }, []);
  console.log(apiData2);
  return (
    <div>
      {apiData2.map((elem) => (
        <Link key={elem.id} to={`/albumdetails/${elem.id}`}>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "wheat",
              opacity: "0.7",
              display: "inline-block",
              border: "2px solid black",
              width: "400px",
              height: "100px",
            }}
          >
            <h3 style={{ color: "black", fontWeight: "600" }}>{elem.title}</h3>
            <Link key={elem.id} to={`/albumdetails/${elem.id}`}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "brown",
                  opacity: "0.7",
                  marginTop: "10px",
                }}
              >
                Details
              </Button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Album;
