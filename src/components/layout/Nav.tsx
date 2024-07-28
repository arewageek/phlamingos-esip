"use client"

import { useEffect } from "react";
import { useTheme } from "next-themes";
import CollectionsDropdown from "./CollectionsDropdown";
import Link from "next/link";
import SearchInput from "./SearchInput";
import ConnectWallet from "../auth/ConnectWallet";


const Nav = () => {

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(() => theme == "light" ? "dark" : "light")
  }

  return (
    <div className="w-full flex flex-col bg-primary-100 text-black fixed top-0 left-0 z-50">

      <div className="px-7 py-5 flex items-center justify-between">
        <Link href="/" className="brand font-bold  block text-secondary-200 dark:text-secondary-100">
          Phlamingos
        </Link>

        <div className="w-full lg:w-1/3 lg:flex gap-5 hidden">
          <SearchInput />

          <CollectionsDropdown device="lg" />
        </div>

        <div className="flex items-stretch w-full lg:w-1/3 gap-1 justify-end">
          <div className="h-full flex items-center my-auto cursor-pointer p-1 lg:px-3" onClick={() => toggleTheme()}>
            {theme == "light" ?
              <svg _ngcontent-ng-c1166287132="" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c1166287132="" className="fill-secondary-200" fillRule="evenodd"><path _ngcontent-ng-c1166287132="" d="m3 3h9v18h-9z"></path><path _ngcontent-ng-c1166287132="" d="m18 21v3h-12v-3zm-12-3v3h-3v-3zm15 0v3h-3v-3zm-18-12v12h-3v-12zm21 0v12h-3v-12zm-3-3v3h-3v-3zm-15 0v3h-3v-3zm0 0v-3h12v3z"></path></g></svg>
              : <svg _ngcontent-ng-c1166287132="" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c1166287132="" className="fill-secondary-100" fillRule="evenodd"><path _ngcontent-ng-c1166287132="" d="m3 3h9v18h-9z"></path><path _ngcontent-ng-c1166287132="" d="m18 21v3h-12v-3zm-12-3v3h-3v-3zm15 0v3h-3v-3zm-18-12v12h-3v-12zm21 0v12h-3v-12zm-3-3v3h-3v-3zm-15 0v3h-3v-3zm0 0v-3h12v3z"></path></g></svg>
            }
          </div>

          <ConnectWallet />
          <button className="px-3 lg:px-5 py-2 bg-secondary-200 dark:bg-secondary-100 text-sm border-transparent">
            <svg _ngcontent-ng-c1166287132="" height="15" viewBox="0 0 9 15" width="9" className="fill-secondary-100 dark:fill-primary-100" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1166287132="" d="m6 6h3v3h-3zm-3-3h3v3h-3zm0 6h3v3h-3zm-3-9h3v3h-3zm0 12h3v3h-3z" fillRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div>
        <div className="w-2/3 flex gap-5 lg:hidden py-3 px-2 justify-center mx-auto">
          <div className="w-full flex">
            <input type="text" placeholder="SEARCH 0X, ENS, OR ENSCRIPTION ID" className="py-3 px-5 w-full bg-black/10" />
            <button className="text-primary-100 dark:text-primary-200 bg-secondary-200 dark:bg-secondary-100 px-6 py-2 font-bold border-transparent">GO</button>
          </div>

          <CollectionsDropdown device="sm" />
        </div>
      </div>
    </div>
  )
};

export default Nav;
