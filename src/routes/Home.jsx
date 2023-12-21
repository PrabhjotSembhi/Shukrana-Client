import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="banner dual-radial-gradient">
        <div className="wrapper">

        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <span className="subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fugit
          qui excepturi?
        </span>
        <div className="note">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus possimus quaerat impedit amet id suscipit, placeat,
            ratione maxime laboriosam vitae aspernatur ipsam.
          </span>
        </div>
        </div>

      </section>
      
    </>
  );
};

export default Home;
