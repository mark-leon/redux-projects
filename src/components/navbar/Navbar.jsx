import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Navbar = () => {
  const history = useHistory();
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <img
          src="./images/logo.png"
          alt="LWS"
          class="max-w-[140px]"
          onClick={() => history.push("/")}
        />
        <div class="flex gap-4">
          <a class="navHome" id="lws-home">
            Home
          </a>
          <a
            onClick={() => history.push("/cart")}
            class="navCart"
            id="lws-cart"
          >
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
