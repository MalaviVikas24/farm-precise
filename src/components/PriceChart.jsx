import { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PriceCharts() {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [crops, setCrops] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [topMarkets, setTopMarkets] = useState([]);

  // Fetch data from the Excel file on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/last_year_mandi_data.xlsx", {
          responseType: "arraybuffer",
        });
        const workbook = XLSX.read(new Uint8Array(response.data), {
          type: "array",
        });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);

        // Extract unique states from the data
        const uniqueStates = [...new Set(jsonData.map((item) => item.state))];
        setStates(uniqueStates);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  // Update markets when a state is selected
  useEffect(() => {
    if (selectedState) {
      const filteredMarkets = [
        ...new Set(
          data
            .filter((item) => item.state === selectedState)
            .map((item) => item.market)
        ),
      ];
      setMarkets(filteredMarkets);
      setSelectedMarket(""); // Reset market selection
      setSelectedCrop(""); // Reset crop selection
    }
  }, [selectedState, data]);

  // Update crops when a market is selected
  useEffect(() => {
    if (selectedMarket) {
      const filteredCrops = [
        ...new Set(
          data
            .filter((item) => item.market === selectedMarket)
            .map((item) => item.commodity)
        ),
      ];
      setCrops(filteredCrops);
      setSelectedCrop(""); // Reset crop selection
    }
  }, [selectedMarket, data]);

  // Calculate top markets and min/max prices when a crop is selected
  useEffect(() => {
    if (selectedCrop) {
      const filteredData = data.filter(
        (item) =>
          item.state === selectedState &&
          item.market === selectedMarket &&
          item.commodity === selectedCrop
      );

      // Sort the filtered data by price (highest to lowest) and pick top 5
      const sortedByPrice = filteredData
        .sort((a, b) => b.max_price - a.max_price)
        .slice(0, 5);
      setTopMarkets(sortedByPrice);
    }
  }, [selectedCrop, selectedState, selectedMarket, data]);

  // Data for min and max prices chart (dual bar chart)
  const minMaxChartData = {
    labels: topMarkets.map((item) =>
      new Date(item.arrival_date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Min Price",
        data: topMarkets.map((item) => item.min_price),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        barPercentage: 0.4, // Control the width of bars
      },
      {
        label: "Max Price",
        data: topMarkets.map((item) => item.max_price),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        barPercentage: 0.4, // Control the width of bars
      },
    ],
  };

  return (
    <div className="market-container">
      <h2>Market Charts</h2>

      {/* State Dropdown */}
      <div>
        <label>Select State: </label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Market Dropdown */}
      {markets.length > 0 && (
        <div>
          <label>Select Market: </label>
          <select
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
          >
            <option value="">Select Market</option>
            {markets.map((market) => (
              <option key={market} value={market}>
                {market}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Crop Dropdown */}
      {crops.length > 0 && (
        <div>
          <label>Select Crop: </label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="">Select Crop</option>
            {crops.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Min and Max Prices Chart */}
      {topMarkets.length > 0 && (
        <div>
          <h3>
            Min and Max Prices for {selectedCrop} in {selectedMarket}
          </h3>
          <Bar data={minMaxChartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
}

export default PriceCharts;
