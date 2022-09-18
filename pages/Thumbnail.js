import React from "react";
import Image from "next/image";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className=" group p-4 transition ease-in delay-200  hover:scale-110 hover: duration-200">
      <Image
        className="rounded-sm"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className=" p-2 group cursor-pointer  ">
        <h3 className="text-2xl ease-in hover:scale-110 hover: duration-200 ">
          {" "}
          {result.title}
        </h3>
        <p className="truncate max-w-md">{result.overview}</p>
      </div>
    </div>
  );
}

export default Thumbnail;
