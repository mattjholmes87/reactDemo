import React, { Component } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { country } = useParams();

  if (country === "en") {
    return <p>Please call 044</p>;
  }
  if (country !== "en") {
    return <p>We do not accept international calls</p>;
  }

  return <div>Contact page</div>;
};

export default Contact;
