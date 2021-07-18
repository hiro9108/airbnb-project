import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  getAllLakes,
  getAllMountains,
  getAllCoastals,
  getAllIslands,
  getAllOutdoors,
  getAllOthers,
} from "./gateway-data";

const Gateway = () => {
  const lakes = getAllLakes();
  const mountains = getAllMountains();
  const coastals = getAllCoastals();
  const islands = getAllIslands();
  const outdoors = getAllOutdoors();
  const others = getAllOthers();

  return (
    <section className="mb-16">
      <h3 className="font-semibold mt-10">Inspiration for future getaways</h3>
      <Tabs>
        <TabList className="flex border-b-2 border-solid border-gray-300 overflow-x-scroll">
          <Tab className="distinations">Lake Distinations</Tab>
          <Tab className="distinations">Mountain Distinations</Tab>
          <Tab className="distinations">Coastal Distinations</Tab>
          <Tab className="distinations">Island Distinations</Tab>
          <Tab className="distinations">Outdoor Distinations</Tab>
          <Tab className="distinations">Other Popular Distinations</Tab>
        </TabList>

        <TabPanel>
          <div className="gateway_list">
            {lakes.map((lake, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{lake.area}</h6>
                  <h6 className="text-gray-500">{lake.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="gateway_list">
            {mountains.map((mountain, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{mountain.area}</h6>
                  <h6 className="text-gray-500">{mountain.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="gateway_list">
            {coastals.map((coastal, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{coastal.area}</h6>
                  <h6 className="text-gray-500">{coastal.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="gateway_list">
            {islands.map((island, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{island.area}</h6>
                  <h6 className="text-gray-500">{island.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="gateway_list">
            {outdoors.map((outdoor, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{outdoor.area}</h6>
                  <h6 className="text-gray-500">{outdoor.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="gateway_list">
            {others.map((other, index) => {
              return (
                <div key={index} className="font-light cursor-pointer">
                  <h6>{other.area}</h6>
                  <h6 className="text-gray-500">{other.city}</h6>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Gateway;
