import React from "react";
import MyContainer from "../components/template/MyCountainer";
import GaleryDetailData from "../data/GaleryDetailData";
import { LazyLoadImage } from "react-lazy-load-image-component";
function DetailGalery() {
  return (
    <MyContainer containerStyle='mt-[5rem] max-sm:mt-[2rem]'>
      <div className="grid gap-1 mb-4">
        <div className="text-5xl max-sm:text-2xl">Moment kami.</div>
        <div className="text-xl max-sm:text-xs">
          Tinggalkan 1 moment yang membuatmu berkembang di sini
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GaleryDetailData.map((src, index) => (
          <div className={`rounded-xl [&:nth-child(3n+1)]:row-[span_2] overflow-hidden bg-gray-500`} key={index}>
            <LazyLoadImage
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0"
            />
          </div>
        ))}
      </div>
    </MyContainer>
  );
}

export default DetailGalery;
