import React from "react";
import CollectionsDropdown from "./nav/CollectionsDropdown"

const Nav = () => {
  return <div className="px-10 py-7 bg-primary-100 text-black flex items-center justify-between">
    <div className="brand font-bold text-lg hidden lg:block text-secondary-100">
      Phlamingos NFT
    </div>

    <div className="w-full lg:w-1/3 flex gap-5">
      <div className="w-full flex">
        <input type="text" placeholder="SEARCH 0X, ENS, OR ENSCRIPTION ID" className="py-3 px-5 w-full bg-black/10" />
        <button className="text-primary-100 bg-secondary-100 px-6 py-2 font-bold">GO</button>
      </div>

      <CollectionsDropdown />
    </div>

    <div className="flex items-center w-full lg:w-1/3 gap-1 justify-end">
      <button className="font-bold items-center justify-center bg-secondary-100 px-5 py-2 text-primary-100">
        CONNECT
      </button>
      <button className="px-3 py-2 bg-secondary-100 text-primary-100">
        &gt;
      </button>
    </div>
  </div>;
};

export default Nav;
