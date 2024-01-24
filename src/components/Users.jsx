import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvider";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Users = () => {
  const { getApi, apiData } = useContext(apiContext);
  useEffect(() => {
    getApi();
  }, []);
  console.log(apiData);
  return (
    <div>
      {apiData.map((elem) => (
        <Link key={elem.id} to={`/userdetails/${elem.id}`}>
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
            <h1 style={{ color: "black", fontWeight: "600" }}>{elem.name}</h1>
            <Link key={elem.id} to={`/userdetails/${elem.id}`}>
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
export default Users;
