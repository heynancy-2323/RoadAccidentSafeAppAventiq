import React, { useState } from 'react';
import authService from '../services/authService';
import User from '../models/User.js';

export default function FieldReport() {
  const [vehicles, setVehicles] = useState([{ id: 1 }]);
  const [drivers, setDrivers] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState({
    publicReportId: '',
    incidentDateTime: '',
    locationDescription: '',
    gpsLat: '',
    gpsLng: '',
    roadType: '',
    accidentDescription: '',
    severity: '',
    injuries: 0,
    fatalities: 0,
    weather: '',
    roadCondition: '',
    visibility: '',
    witnessInfo: '',
    infrastructureDamage: '',
    additionalNotes: '',
    verification1: false,
    verification2: false,
    digitalSignature: '',
    badgeNumber: ''
  });
  const [user, setUser] = useState(() => {
    const storedUser = authService.getCurrentUser();
    return storedUser;
  });

  const addVehicle = () =>
    setVehicles([...vehicles, { id: Date.now() }]);
  const removeVehicle = (id) =>
    setVehicles(vehicles.filter((v) => v.id !== id));

  const addDriver = () =>
    setDrivers([...drivers, { id: Date.now() }]);
  const removeDriver = (id) =>
    setDrivers(drivers.filter((d) => d.id !== id));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['incidentDateTime', 'locationDescription', 'accidentDescription', 'severity'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (!formData.verification1 || !formData.verification2) {
      alert('Please complete the officer verification checkboxes');
      return;
    }

    // Collect all form data
    const reportData = {
      ...formData,
      vehicles: vehicles.map(v => ({
        id: v.id,
        type: document.querySelector(`[data-vehicle-id="${v.id}"] select[name="vehicleType"]`)?.value || '',
        registration: document.querySelector(`[data-vehicle-id="${v.id}"] input[name="registration"]`)?.value || '',
        damage: document.querySelector(`[data-vehicle-id="${v.id}"] textarea[name="damage"]`)?.value || ''
      })),
      drivers: drivers.map(d => ({
        id: d.id,
        name: document.querySelector(`[data-driver-id="${d.id}"] input[name="driverName"]`)?.value || '',
        license: document.querySelector(`[data-driver-id="${d.id}"] input[name="license"]`)?.value || '',
        contact: document.querySelector(`[data-driver-id="${d.id}"] input[name="contact"]`)?.value || '',
        age: document.querySelector(`[data-driver-id="${d.id}"] input[name="age"]`)?.value || ''
      }))
    };

    console.log('Field Report Submitted:', reportData);
    alert('Field Report submitted successfully!');
  };

  const saveDraft = () => {
    console.log('Saving draft...');
    alert('Report saved as draft');
  };

  const clearForm = () => {
    if (confirm('Are you sure you want to clear all form data?')) {
      setFormData({
        publicReportId: '',
        incidentDateTime: '',
        locationDescription: '',
        gpsLat: '',
        gpsLng: '',
        roadType: '',
        accidentDescription: '',
        severity: '',
        injuries: 0,
        fatalities: 0,
        weather: '',
        roadCondition: '',
        visibility: '',
        witnessInfo: '',
        infrastructureDamage: '',
        additionalNotes: '',
        verification1: false,
        verification2: false,
        digitalSignature: '',
        badgeNumber: ''
      });
      setVehicles([{ id: 1 }]);
      setDrivers([{ id: 1 }]);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            gpsLat: position.coords.latitude.toFixed(6),
            gpsLng: position.coords.longitude.toFixed(6)
          }));
          alert('Location captured successfully!');
        },
        (error) => {
          alert('Unable to get location: ' + error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center overflow-y-auto">
        {/* Header OUTSIDE the form card */}
        <div className="w-full max-w-4xl mx-auto mt-10 mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 px-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Field Accident Report</h1>
            <p className="text-gray-600 text-sm mt-1">Complete detailed accident report with evidence and witness information</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Online</span>
              <span className="text-sm text-gray-600">• Auto-sync enabled</span>
            </div>
            <button
              type="button"
              onClick={saveDraft}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            >
              Save Draft
            </button>
          </div>
        </div>
        {/* Form Card */}
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto flex flex-col px-4">
          <div className="bg-white rounded-xl border border-gray-300 p-8 w-full">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Basic Information */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Basic Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Related Public Report ID
                    </label>
                    <select 
                      name="publicReportId"
                      value={formData.publicReportId}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select public report</option>
                      <option value="PR-2025-001">PR-2025-001</option>
                      <option value="PR-2025-002">PR-2025-002</option>
                      <option value="PR-2025-003">PR-2025-003</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field Officer ID
                    </label>
                    <input
                      type="text"
                      value="FO-2025-001"
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Incident Date & Time *
                    </label>
                    <input
                      type="datetime-local"
                      name="incidentDateTime"
                      value={formData.incidentDateTime}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Report Filed Date & Time
                    </label>
                    <input
                      type="text"
                      value={new Date().toLocaleString('en-IN')}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                </div>
              </section>

              {/* Location Details */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Location Details</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Exact Location Description *
                  </label>
                  <textarea
                    name="locationDescription"
                    value={formData.locationDescription}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                    placeholder="Provide detailed location description including landmarks, road names, etc."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GPS Coordinates
                    </label>
                    <input
                      type="text"
                      name="gpsLat"
                      value={formData.gpsLat}
                      onChange={handleInputChange}
                      placeholder="Latitude"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      &nbsp;
                    </label>
                    <input
                      type="text"
                      name="gpsLng"
                      value={formData.gpsLng}
                      onChange={handleInputChange}
                      placeholder="Longitude"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Road Type
                    </label>
                    <select 
                      name="roadType"
                      value={formData.roadType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select road type</option>
                      <option value="highway">Highway</option>
                      <option value="main-road">Main Road</option>
                      <option value="local-street">Local Street</option>
                      <option value="service-road">Service Road</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 text-sm"
                >
                  📍 Capture Current Location
                </button>
              </section>

              {/* Accident Details */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Accident Details</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Detailed Accident Description *
                  </label>
                  <textarea
                    name="accidentDescription"
                    value={formData.accidentDescription}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Provide comprehensive description of how the accident occurred, sequence of events, etc."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Accident Severity *
                    </label>
                    <select 
                      name="severity"
                      value={formData.severity}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select severity</option>
                      <option value="minor">Minor</option>
                      <option value="moderate">Moderate</option>
                      <option value="severe">Severe</option>
                      <option value="fatal">Fatal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Injuries
                    </label>
                    <input
                      type="number"
                      name="injuries"
                      value={formData.injuries}
                      onChange={handleInputChange}
                      min={0}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Fatalities
                    </label>
                    <input
                      type="number"
                      name="fatalities"
                      value={formData.fatalities}
                      onChange={handleInputChange}
                      min={0}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </section>

              {/* Vehicle Information */}
              <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Vehicle Information</h2>
                  <button
                    type="button"
                    onClick={addVehicle}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    Add Vehicle
                  </button>
                </div>
                {vehicles.map((v) => (
                  <div key={v.id} data-vehicle-id={v.id} className="border border-gray-200 rounded-lg p-4 mb-4 relative bg-gray-50">
                    {vehicles.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeVehicle(v.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        🗑
                      </button>
                    )}
                    <h3 className="font-semibold mb-3 text-gray-900">Vehicle {vehicles.indexOf(v) + 1}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Vehicle Type *
                        </label>
                        <select 
                          name="vehicleType"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select type</option>
                          <option value="car">Car</option>
                          <option value="motorcycle">Motorcycle</option>
                          <option value="truck">Truck</option>
                          <option value="bus">Bus</option>
                          <option value="auto-rickshaw">Auto Rickshaw</option>
                          <option value="bicycle">Bicycle</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Registration Number *
                        </label>
                        <input
                          type="text"
                          name="registration"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., HR-01-AB-1234"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Damage Description
                      </label>
                      <textarea
                        name="damage"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="2"
                        placeholder="Describe vehicle damage"
                      />
                    </div>
                  </div>
                ))}
              </section>

              {/* Driver Information */}
              <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Driver Information</h2>
                  <button
                    type="button"
                    onClick={addDriver}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
                  >
                    Add Driver
                  </button>
                </div>
                {drivers.map((d) => (
                  <div key={d.id} data-driver-id={d.id} className="border border-gray-200 rounded-lg p-4 mb-4 relative bg-gray-50">
                    {drivers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDriver(d.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        🗑
                      </button>
                    )}
                    <h3 className="font-semibold mb-3 text-gray-900">Driver {drivers.indexOf(d) + 1}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Driver Name *
                        </label>
                        <input
                          type="text"
                          name="driverName"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          License Number
                        </label>
                        <input
                          type="text"
                          name="license"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Driving license number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Age"
                          min={0}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Environmental Conditions */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Environmental Conditions</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weather Conditions
                    </label>
                    <select 
                      name="weather"
                      value={formData.weather}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select weather</option>
                      <option value="clear">Clear</option>
                      <option value="cloudy">Cloudy</option>
                      <option value="rainy">Rainy</option>
                      <option value="foggy">Foggy</option>
                      <option value="stormy">Stormy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Road Conditions
                    </label>
                    <select 
                      name="roadCondition"
                      value={formData.roadCondition}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select condition</option>
                      <option value="dry">Dry</option>
                      <option value="wet">Wet</option>
                      <option value="icy">Icy</option>
                      <option value="under-construction">Under Construction</option>
                      <option value="damaged">Damaged</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Visibility
                    </label>
                    <select 
                      name="visibility"
                      value={formData.visibility}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select visibility</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="poor">Poor</option>
                      <option value="very-poor">Very Poor</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Evidence Collection */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Evidence Collection</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photos/Videos
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 cursor-pointer">
                    <div className="text-4xl mb-2">📷+</div>
                    <p className="text-blue-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">PNG, JPG, MP4 up to 50MB each</p>
                    <input type="file" multiple accept="image/png,image/jpeg,video/mp4" className="hidden" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
                  >
                    📷 Capture Photo
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
                  >
                    📹 Record Video
                  </button>
                </div>
              </section>

              {/* Additional Information */}
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Additional Information</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Witness Information
                  </label>
                  <textarea
                    name="witnessInfo"
                    value={formData.witnessInfo}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="2"
                    placeholder="Names, contact details, and statements of witnesses"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Infrastructure Damage
                  </label>
                  <textarea
                    name="infrastructureDamage"
                    value={formData.infrastructureDamage}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="2"
                    placeholder="Damage to road signs, barriers, traffic lights, etc."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="2"
                    placeholder="Any other relevant information or observations"
                  />
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded space-y-2 mt-6">
                  <h3 className="font-semibold text-blue-900">Officer Verification</h3>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="verification1"
                      checked={formData.verification1}
                      onChange={handleInputChange}
                    />
                    <span>I verify that all information provided is accurate to the best of my knowledge.</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="verification2"
                      checked={formData.verification2}
                      onChange={handleInputChange}
                    />
                    <span>I confirm that all evidence has been properly collected and attached.</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Digital Signature</label>
                      <input
                        type="text"
                        name="digitalSignature"
                        value={formData.digitalSignature}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Type your full name as digital signature"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Badge Number</label>
                      <input
                        type="text"
                        name="badgeNumber"
                        value={formData.badgeNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Officer badge number"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Submit / Draft / Clear */}
              <div className="flex space-x-4 justify-end mt-8">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit Field Report
                </button>
                <button
                  type="button"
                  onClick={saveDraft}
                  className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Save as Draft
                </button>
                <button
                  type="button"
                  onClick={clearForm}
                  className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


