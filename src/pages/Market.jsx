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

function Market() {
  const [data, setData] = useState([]);
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(
    localStorage.getItem("selectedCrop") || ""
  );
  const [topMarkets, setTopMarkets] = useState([]);

  // Fetch data from the Excel file (or localStorage) on initial mount
  useEffect(() => {
    const fetchData = async () => {
      // Check if data already exists in localStorage
      const cachedData = localStorage.getItem("excelData");
      if (cachedData) {
        setData(JSON.parse(cachedData)); // Load data from localStorage
        const uniqueCrops = [
          ...new Set(JSON.parse(cachedData).map((item) => item.commodity)),
        ];
        setCrops(uniqueCrops);
      } else {
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

          // Cache the data in localStorage
          localStorage.setItem("excelData", JSON.stringify(jsonData));

          // Extract unique crops from the data
          const uniqueCrops = [
            ...new Set(jsonData.map((item) => item.commodity)),
          ];
          setCrops(uniqueCrops);
        } catch (error) {
          console.error("Error fetching or parsing data:", error);
        }
      }
    };

    fetchData();
  }, []);

  // Calculate top markets and min/max prices when a crop is selected
  useEffect(() => {
    if (selectedCrop) {
      const filteredData = data.filter(
        (item) => item.commodity === selectedCrop
      );

      // Sort the filtered data by price (highest to lowest) and pick top 5 markets
      const sortedByPrice = filteredData
        .sort((a, b) => b.max_price - a.max_price)
        .slice(0, 5);

      setTopMarkets(sortedByPrice);
      // Store the selected crop in localStorage
      localStorage.setItem("selectedCrop", selectedCrop);
    }
  }, [selectedCrop, data]);

  // Data for min and max prices chart (dual bar chart)
  const minMaxChartData = {
    labels: topMarkets.map(
      (item) =>
        `${new Date(item.arrival_date).toLocaleDateString()} - ${item.market}`
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
          <h3>Min and Max Prices for {selectedCrop} in Top 5 Markets</h3>
          <Bar
            data={minMaxChartData}
            options={{
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Date and Market",
                  },
                  ticks: {
                    autoSkip: false, // Ensure all labels are shown even if they overlap
                    maxRotation: 90, // Rotate labels to avoid overlap
                    minRotation: 45, // Minimum rotation for readability
                  },
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Market;
