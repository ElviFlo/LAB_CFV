import {
    Area,
    AreaChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";
  import { CustomerWrap } from "./Customer.styles";
  import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
  // import { CUSTOMER_DATA } from "../../../data/mockData";
  import PropTypes from "prop-types";
  import React, { useEffect, useState } from 'react';
  
  const CUSTOMER_DATA_ENDPOINT = "http://127.0.0.1:5000/api/months_Delay";

async function fetchCustomerData() {
  try {
    const response = await fetch(CUSTOMER_DATA_ENDPOINT);
    if (!response.ok) {
      throw new Error("Failed to fetch customer data");
    }
    const data = await response.json();
    
    // Formateamos los datos para que coincidan con la estructura de CUSTOMER_DATA
    return data.map((item) => ({
      month: getMonthName(item.month), // Función para obtener el nombre del mes
      Departure_Delay: item.aterrizaje,
      Arrival_Delay: item.despegue,
    }));
    
  } catch (error) {
    console.error("Error fetching customer data:", error);
    return [];
  }
}
function getMonthName(monthNumber) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return monthNames[monthNumber - 1];
}
const CUSTOMER_DATA = await fetchCustomerData();
  // console.log(CUSTOMER_DATA);
  
  const formatLegendValue = (value, name) => {
    const initialVal = 0;
    const totalVal = CUSTOMER_DATA.reduce((accumulator, currentValue) => {
      if (Object.keys(currentValue).includes(name.dataKey)) {
        return accumulator + currentValue[name.dataKey];
      }
    }, initialVal);
  
    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">{value.replace("_", " ")}</span>
        <span className="custom-legend-item-text">{(totalVal/12).toFixed(2)} minutes in 2013</span>
      </span>
    );
  };

  
  const CustomTooltipContent = ({ payload }) => {
    if (!payload || !payload.length) return null;
  
    return (
      <div className="custom-recharts-tooltip">
        <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
        <ul className="recharts-tooltip-item-list">
          {payload?.map((payloadItem, index) => {
            return (
              <li key={index}>
                {formatTooltipValue(payloadItem.name, payloadItem.value)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  CustomTooltipContent.propTypes = {
    payload: PropTypes.any,
  };
  
  const formatTooltipValue = (value, name) => {
    return `${value.replace("_", " ")}: ${name}`;
  };
  
  const Customer = () => {
    

    return (
      <CustomerWrap>
        <div className="block-head">
          <BlockTitle className="block-title">
            <h3>Average Departure and Arrival Delay by Month</h3>
          </BlockTitle>
        </div>
        <BlockContentWrap className="area-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={730}
              height={250}
              data={CUSTOMER_DATA}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0095FF" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#07E098" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#07E098" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltipContent />} />
              <Area
                type="monotone"
                dataKey="Departure_Delay"
                stroke="#0095FF"
                fillOpacity={1}
                fill="url(#colorUv)"
                strokeWidth={2}
                dot={{
                  stroke: "#0095FF",
                  fill: "#0095FF",
                }}
              />
              <Legend formatter={formatLegendValue} />
              <Area
                type="monotone"
                dataKey="Arrival_Delay"
                stroke="#07E098"
                fillOpacity={1}
                fill="url(#colorPv)"
                strokeWidth={2}
                dot={{
                  stroke: "#07E098",
                  fill: "#07E098",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </BlockContentWrap>
      </CustomerWrap>
    );
  };
  
  export default Customer;