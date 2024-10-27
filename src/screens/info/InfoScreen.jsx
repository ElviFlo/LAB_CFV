import React from "react";
import { InfoScreenWrap } from "./InfoScreen.styles";
import airplaneImage from "../../assets/img/airplane.png";
import { Icons } from "../../assets/icons";
import pdfFile from '../../assets/diagram/diagram.pdf';


const InfoScreen = () => {
  return (
    <InfoScreenWrap>
      <div className="container">

        {/* Sección Banner */}
        <div className="banner">
          <div className="texto-banner">
            <h4>Welcome to</h4>
            <h1>FlIGHTS</h1>
            <p className="banner-paragraph">
              Explore dynamic insights from flight data and customer statistics,
              visualized for a comprehensive view of trends, performance, and
              patterns. Our data-driven approach provides valuable information
              for analysts, aviation enthusiasts, and business professionals
              interested in understanding both flight schedules and customer
              engagement patterns.
            </p>

            <a 
              href="https://www.kaggle.com/datasets/mahoora00135/flights?select=flights.csv"
              target="_blank" 
              rel="noopener noreferrer" 
              className="button"
            >
              See the Database
            </a>
            
          </div>
          <img src={airplaneImage} alt="Airplane" />
        </div>


        {/* Segunda sección */}
        <div className="insights-container">
          <h2>Why These Insights Matter?</h2>
          <p>
            Flight schedules, punctuality, and customer behavior are crucial
            metrics for improving operational efficiency, understanding consumer
            demands, and optimizing service delivery. By combining visualization
            with detailed statistics, this webpage provides a window into these
            metrics and helps you make informed decisions.
          </p>

          <div className="stats">
            <div className="stat left">
              <div className="circle">87%</div>
              <p>Of people prefer traveling</p>
            </div>
            <div className="stat right">
              <div className="circle">16M</div>
              <p>Flights handled per year</p>
            </div>
          </div>

          <h2 className="subtittle">Tools Used For The Web Build</h2>
          <p className="subtittle-description">
            These are the powerful tools and technologies that we use to create
            this exceptional website.
          </p>

          <div className="tools">
            {
              [
                { icon: Icons.Figma, title: "Figma", description: "Design tool" },
                { icon: Icons.Css, title: "CSS", description: "User Interface" },
                { icon: Icons.JavaScript, title: "JavaScript", description: "For Interaction" },
                { icon: Icons.Nodejs, title: "NodeJS", description: "Web Server" },
                { icon: Icons.Visual, title: "Visual Studio", description: "For Development" },
                { icon: Icons.MongoDB, title: "PostgreSQL", description: "Used Database" },
                { icon: Icons.React, title: "React", description: "Framework" },
                { icon: Icons.Tailwindcss, title: "Tailwindcss", description: "User Interface" },
              ].map((tool, index) => 
                  (
                    <figure key={index} className="tool-item">
                      <div className="tool-content">
                        <img src={tool.icon} alt={tool.title} className="tool-icon" />
                        <div className="tool-text">
                          <h3>{tool.title}</h3>
                          <p className="tool-description">{tool.description}</p>
                        </div>
                      </div>
                    </figure>
                  )
                )
            }
          </div>

          <h2 className="subtittle">Data Selected</h2>
          <p className="subtittle-description">
            This webpage displays data sourced from our PostgreSQL database, which aggregates flight and 
            customer information in real-time. Our datasets include the following: 
          </p>

          <div className="data-content">
            <div className="Flight-Statistics">
              <h3>Flight Statistics</h3>
              <p>
                Information such as flight dates, locations, departure and arrival times, 
                and delay causes. 
              </p>
            </div>
            <div className="Customer-Trends">
              <h3>Customer Trends</h3>
              <p>
                Monthly data on customer types, including new, returning, and 
                unique visitors.  
              </p>
            </div>

          </div>

          <h2 className="subtittle">Data Overview</h2>
          <p className="subtittle-description">
            Our dataset is organized into multiple tables, each covering different aspects of flight 
            operations and customer data.  
          </p>
          
          <div className="button-container">
            <a 
                href={pdfFile}
                download
                className="button"
              >
              See the Entity-Relationship Diagram
            </a>
          </div>

          <div className="tables-container">
            <div className="table-item">
              <h3>Table Airlines</h3>
              <ul>
                <li><strong>airline_id:</strong> A unique identifier for each airline.</li>
                <li><strong>name:</strong> The name of the airline, which must be unique.</li>
              </ul>
            </div>

            <div className="table-item">
              <h3>Table Airports</h3>
              <ul>
                <li><strong>airport_code:</strong> A unique code for each airport.</li>
                <li><strong>latitude:</strong> The latitude of the airport's location.</li>
                <li><strong>longitude:</strong> The longitude of the airport's location.</li>
              </ul>
            </div>

            <div className="table-item">
              <h3>Table Aircraft</h3>
              <ul>
                <li><strong>tailnum:</strong> A unique identifier for each aircraft.</li>
                <li><strong>airline_id:</strong> A reference to the airline that operates the aircraft.</li>
              </ul>
            </div>
          </div>

          <div className="tables-container-2">
            <h3>Table Flights:</h3>
            <ul>
              {[
                { field: "flight_id", description: "A unique identifier for each flight." },
                { field: "date", description: "The date of the flight." },
                { field: "year", description: "The year of the flight." },
                { field: "month", description: "The month of the flight." },
                { field: "day", description: "The day of the flight." },
                { field: "dep_time", description: "The actual departure time." },
                { field: "sched_dep_time", description: "The scheduled departure time." },
                { field: "dep_delay", description: "The delay in departure time." },
                { field: "arr_time", description: "The actual arrival time." },
                { field: "sched_arr_time", description: "The scheduled arrival time." },
                { field: "arr_delay", description: "The delay in arrival time." },
                { field: "carrier", description: "The carrier code of the airline." },
                { field: "flight_number", description: "The flight number assigned by the airline." },
                { field: "origin", description: "The airport code for the departure airport." },
                { field: "destination", description: "The airport code for the arrival airport." },
                { field: "air_time", description: "The time spent in the air." },
                { field: "distance", description: "The distance traveled during the flight." },
                { field: "hour", description: "The hour of the flight departure." },
                { field: "minute", description: "The minute of the flight departure." },
                { field: "time_hour", description: "A timestamp of the flight's scheduled time." },
                { field: "tailnum", description: "The aircraft tail number." },
              ].map((item, index) => (
                <li key={index}>
                  <strong>{item.field}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </InfoScreenWrap>
  );
};

export default InfoScreen;
