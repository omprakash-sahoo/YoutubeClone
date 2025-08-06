import React, { useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SERCH_API } from "../utils/constant";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const [inputSerch, setInputSerch] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [hideSearchDiv, setHideSearchDiv] = useState(false);

  const getSearchValue = async () => {
    const data = await fetch(YOUTUBE_SERCH_API + inputSerch);
    const json = await data.json();
    setSearchValue(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchValue();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputSerch]);
  return (
    <div className="grid grid-flow-col">
      <div className="flex justify-start text-center gap-2 p-4 col-span-1">
        <button className="cursor-pointer" onClick={() => handleToggleMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 my-auto ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <img className="h-10 w-23 my-auto" alt="Logo" src={LOGO_IMG} />
      </div>
      <div className="flex justify-center text-center col-span-8 relative">
        <input
          type="text"
          placeholder="Search"
          className="p-4 my-auto w-[560px] h-10 border border-gray-300 rounded-l-full"
          onChange={(e) => setInputSerch(e.target.value)}
          onFocus={() => setHideSearchDiv(true)}
          onBlur={() => setHideSearchDiv(false)}
        ></input>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-gray-500 p-2 size-6 bg-gray-100 border border-gray-300 h-10 w-[50px] rounded-r-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <div className="my-auto mx-2 p-2 bg-gray-100  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
          {hideSearchDiv && (
            <div className="absolute top-[60px] left-[170px] w-[600px] bg-white border border-gray-200 rounded-xl shadow-lg z-10">
              <ul>
                {searchValue.map((suggestion, index) => (
                  <li
                    className="text-left px-2 py-[7px] flex hover:bg-gray-100"
                    key={index}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="pointer-events-none size-4 text-center mt-1 ml-2"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end text-center gap-4 col-span-3">
        <div className="my-auto">
          <button className="flex bg-gray-100 p-[8px] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Create
          </button>
        </div>
        <div className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            className="pointer-events-none size-6"
          >
            <path
              clipRule="evenodd"
              d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="my-auto mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Head;
