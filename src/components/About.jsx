import React, { useContext } from "react";
import { useRouter } from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>about</h1>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};
export default About;
