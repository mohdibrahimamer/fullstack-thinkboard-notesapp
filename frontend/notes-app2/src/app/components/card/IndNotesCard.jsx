import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const IndNotesCard = ({ notes }) => {
  console.log("notes", notes);
  const { id } = useParams();

  useEffect(() => {}, []);

  //   yaha  per getnote ki functionality implement karey

  return <></>;
};

export default IndNotesCard;
