import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Search = ({onFilterCountry , onFilterCategory , onFilterVendor}) => {
  

  return (
    <div className="flex justify-center py-10">
    <div className="flex items-center space-x-8 bg-gray-50 p-4 rouned-full">
      <div className="flex item-center space-x-5">
        <FaLocationDot />
        <select  onChange={(e)=> onFilterCountry(e.target.value)} className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring foucs:ring-indigo-200">
          <option value="">All countries</option>
          <option value="US">United State</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>
      <div>
        <select  onChange={(e)=> onFilterVendor(e.target.value)} className="bg-transparent w-full border border-gray-50 rounded-md  outline-0 focus:ring foucs:ring-indigo-200" >
          <option value="">All Vendors</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Tesla">Tesla</option>
          <option value="Jeep">Jeep</option>
          <option value="BMW">BMW</option>
          <option value="Nissan">Nissan</option>
          <option value="Dodge">Dodge</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Kia">Kia</option>
          <option value="Hyndai">Hundai</option>
          <option value="Mini Cooper">Mini Cooper</option>


        </select>
      </div>
      <div>
        <select  onChange= {(e)=> onFilterCategory(e.target.value)} className="bg-transparent  w-full border border-gray-50 rounded-md  outline-0 focus:ring foucs:ring-indigo-200">
          <option value="">All Categories</option>
          <option value="Sidan">Sidan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Electric">Electric</option>
          <option value="Hyprid">Hybrid</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Muscle Car">Muscle Car</option>
          <option value="Sports Car">Sports Car</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default Search;
