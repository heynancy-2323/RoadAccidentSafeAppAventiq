// FieldReport.jsx
import React, { useState } from 'react';

export default function FieldReport() {
  const [vehicles, setVehicles] = useState([{ id: 1 }]);
  const [drivers, setDrivers] = useState([{ id: 1 }]);

  const addVehicle = () =>
    setVehicles([...vehicles, { id: vehicles.length + 1 }]);
  const removeVehicle = (id) =>
    setVehicles(vehicles.filter((v) => v.id !== id));

  const addDriver = () =>
    setDrivers([...drivers, { id: drivers.length + 1 }]);
  const removeDriver = (id) =>
    setDrivers(drivers.filter((d) => d.id !== id));

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit
  };

  return (
    <form className="p-6 space-y-8 bg-gray-50" onSubmit={handleSubmit}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Field Accident Report</h1>
        <button
          type="button"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Save Draft
        </button>
      </div>

      {/* Basic Information */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <label className="flex flex-col">
            <span>Related Public Report ID</span>
            <select className="mt-1 p-2 border rounded">
              <option>Select public report</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span>Field Officer ID</span>
            <input
              type="text"
              value="FO-2025-001"
              readOnly
              className="mt-1 p-2 border rounded bg-gray-100"
            />
          </label>
          <label className="flex flex-col">
            <span>Incident Date & Time *</span>
            <input
              type="datetime-local"
              required
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Report Filed Date & Time</span>
            <input
              type="text"
              value="09-06-2025 08:51"
              readOnly
              className="mt-1 p-2 border rounded bg-gray-100"
            />
          </label>
        </div>
      </section>

      {/* Location Details */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Location Details</h2>
        <label className="block">
          <span>Exact Location Description *</span>
          <textarea
            required
            className="mt-1 p-2 border rounded w-full"
            placeholder="Provide detailed location description including landmarks, road names, etc."
          />
        </label>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex flex-col">
            <span>Latitude</span>
            <input type="text" className="mt-1 p-2 border rounded" />
          </label>
          <label className="flex flex-col">
            <span>Longitude</span>
            <input type="text" className="mt-1 p-2 border rounded" />
          </label>
          <label className="flex flex-col">
            <span>Road Type</span>
            <select className="mt-1 p-2 border rounded">
              <option>Select road type</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          className="mt-4 inline-flex items-center px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200"
        >
          📍 Capture Current Location
        </button>
      </section>

      {/* Accident Details */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Accident Details</h2>
        <textarea
          required
          className="w-full p-2 border rounded"
          placeholder="Provide comprehensive description of how the accident occurred, sequence of events, etc."
        />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <label className="flex flex-col">
            <span>Accident Severity *</span>
            <select className="mt-1 p-2 border rounded">
              <option>Select severity</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span>Number of Injuries</span>
            <input
              type="number"
              defaultValue={0}
              min={0}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Number of Fatalities</span>
            <input
              type="number"
              defaultValue={0}
              min={0}
              className="mt-1 p-2 border rounded"
            />
          </label>
        </div>
      </section>

      {/* Vehicle Information */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Vehicle Information</h2>
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="border rounded p-4 mb-4 relative bg-gray-50"
          >
            {vehicles.length > 1 && (
              <button
                type="button"
                onClick={() => removeVehicle(v.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            )}
            <h3 className="font-semibold mb-2">Vehicle {v.id}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span>Vehicle Type *</span>
                <select className="mt-1 p-2 border rounded">
                  <option>Select type</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span>Registration Number *</span>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"
                  placeholder="e.g., HR‑01‑AB‑1234"
                />
              </label>
              <label className="flex flex-col col-span-full">
                <span>Damage Description</span>
                <textarea
                  className="mt-1 p-2 border rounded"
                  placeholder="Describe vehicle damage"
                />
              </label>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addVehicle}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Vehicle
        </button>
      </section>

      {/* Driver Information */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Driver Information</h2>
        {drivers.map((d) => (
          <div
            key={d.id}
            className="border rounded p-4 mb-4 relative bg-gray-50"
          >
            {drivers.length > 1 && (
              <button
                type="button"
                onClick={() => removeDriver(d.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            )}
            <h3 className="font-semibold mb-2">Driver {d.id}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span>Driver Name *</span>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"
                  placeholder="Full name"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span>License Number</span>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"
                  placeholder="Driving license number"
                />
              </label>
              <label className="flex flex-col">
                <span>Contact Number</span>
                <input
                  type="tel"
                  className="mt-1 p-2 border rounded"
                  placeholder="+91 XXXXXX XXXXXX"
                />
              </label>
              <label className="flex flex-col">
                <span>Age</span>
                <input
                  type="number"
                  className="mt-1 p-2 border rounded"
                  placeholder="Age"
                  min={0}
                />
              </label>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addDriver}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Driver
        </button>
      </section>

      {/* Environmental Conditions */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">
          Environmental Conditions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-2 border rounded">
            <option>Select weather</option>
          </select>
          <select className="p-2 border rounded">
            <option>Select condition</option>
          </select>
          <select className="p-2 border rounded">
            <option>Select visibility</option>
          </select>
        </div>
      </section>

      {/* Evidence Collection */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-medium mb-4">Evidence Collection</h2>
        <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
          <p className="mb-4">PNG, JPG, MP4 up to 50MB each</p>
          <input type="file" multiple accept="image/png,image/jpeg,video/mp4" />
        </div>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="flex-1 px-4 py-2 border rounded hover:bg-gray-100"
          >
            📷 Capture Photo
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-2 border rounded hover:bg-gray-100"
          >
            📹 Record Video
          </button>
        </div>
      </section>

      {/* Additional Information & Officer Verification */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-medium">Additional Information</h2>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Names, contact details, and statements of witnesses"
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Damage to road signs, barriers, traffic lights, etc."
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Any other relevant information or observations"
        />

        <div className="bg-blue-50 border border-blue-200 p-4 rounded space-y-2">
          <h3 className="font-semibold">Officer Verification</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>I verify that all information provided is accurate...</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>I confirm that all evidence has been properly collected...</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span>Digital Signature</span>
              <input
                type="text"
                className="mt-1 p-2 border rounded"
                placeholder="Type your full name as digital signature"
              />
            </label>
            <label className="flex flex-col">
              <span>Badge Number</span>
              <input
                type="text"
                className="mt-1 p-2 border rounded"
                placeholder="Officer badge number"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Submit / Draft / Clear */}
      <div className="flex space-x-4 justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Field Report
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Save as Draft
        </button>
        <button
          type="reset"
          className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}
