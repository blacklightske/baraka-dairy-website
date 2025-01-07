"use client";

import { Carousel } from "flowbite-react";
import { CaurselTheme } from "../theme/caursel-theme";

export function HomeCoursel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel theme={CaurselTheme}>
        <img
          src="https://img.freepik.com/free-vector/flat-design-agriculture-company-facebook-cover_23-2151123417.jpg?t=st=1733715107~exp=1733718707~hmac=372f476e0c44469be295dae88900506699b4dfc10c1adddc25ee96ac7a6acbb0&w=1800"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-vector/flat-design-healthy-food-twitter-header_23-2149194902.jpg?t=st=1733715166~exp=1733718766~hmac=982d362b8a94b1a09de1ec469e4bb771d6c5c35fb770a6ed28d16c63b4845919&w=1800"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-vector/agriculture-company-facebook-cover-template_23-2151177731.jpg?t=st=1733715208~exp=1733718808~hmac=28f26a068a7f7787e25444fdd0d74037705847a61e5a370f110416c163f7808d&w=1800"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
