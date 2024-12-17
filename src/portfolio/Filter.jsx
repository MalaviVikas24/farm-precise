/* eslint-disable react/prop-types */
const Filter = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-container">
      <label>
        State:
        <input
          type="text"
          name="state"
          value={filters.state || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Crop:
        <input
          type="text"
          name="crop"
          value={filters.crop || ""}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default Filter;
