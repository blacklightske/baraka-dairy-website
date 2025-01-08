"use client";

import { Badge, Button, } from "flowbite-react";
import Search from "../components/search.tsx";


const HomeMain = () => {
  return (
    <div className="max-w-max">
      <Search />

      <div className="bg-white shadow p-7 flex flex-col gap-3 mt-5">
        <div className="w-max">
          <Badge color="success">What we do</Badge>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-green-600 capitalize dark:text-white">
          Welcome to Baraka Dairy
        </h5>
        <h5 className="text-xl text-slate-600 italic font-bold tracking-tight  dark:text-white">
          We are a Food Waste Management Company, committed to The environment
        </h5>

        <p>
          as baraka dairy we pride ourselves with ensuring timely collection of
          milk from the famers and safe transportation of the milk to the milk
          collection points, we also sell animal feeds to the farmers and other
          animal products and deliver them to the famers doorstep.
        </p>

        <div className="flex justify-end mt-5">
          <Button>Visit the Store</Button>
        </div>
      </div>
      <Search />

      <div className="bg-green-100 shadow mt-5 p-7 flex flex-col gap-3">
        <h5 className="text-2xl text-center font-bold tracking-tight text-green-600 capitalize dark:text-white">
          Farmers Blog
        </h5>

        <p>
          Green waste and the circular economy are interconnected concepts that
          promote sustainable waste management and resource utilization. Green
          waste, which includes organic materials like food scraps and yard
          trimmings, can be effectively recycled and transformed into valuable
          resources through processes like composting and anaerobic digestion.
          This enables the recovery of nutrients, the generation of renewable
          energy, and the creation of economic opportunities. By incorporating
          green waste into circular economy models, we can minimize waste,
          maximize resource efficiency, and contribute to a more sustainable and
          regenerative approach to waste management and resource utilization.
        </p>

      </div>
    
    </div>
  );
};

export default HomeMain;
