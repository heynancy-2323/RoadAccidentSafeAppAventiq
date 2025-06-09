import React, { useState } from 'react';

const PublicReport = () => {
  const [form, setForm] = useState({
    address: '',
    landmark: '',
    description: '',
    severity: '',
    vehicles: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    captchaInput: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    // Handle file upload logic
    console.log(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div className="flex-1 p-8 bg-[#F9FAFB] h-screen flex flex-col">
      <div className="text-center mb-6">
        <div className="text-5xl text-[#B91C1C] mb-2">🏠</div>
        <h1 className="text-3xl font-bold text-[#111827]">Report Road Accident</h1>
        <p className="text-gray-600">Help us improve road safety by reporting accidents quickly and anonymously</p>
        <p className="mt-2 bg-green-100 text-green-700 inline-block text-sm rounded px-4 py-1">🔒 No login required • Anonymous reporting</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow space-y-6">
          {/* Accident Location */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Accident Location</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address/Location Description *</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="e.g., Near Sector 15 Metro Station, Main Road, Faridabad"
                className="w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <input
                name="landmark"
                value={form.landmark}
                onChange={handleChange}
                placeholder="e.g., BPTP Park, City Mall"
                className="flex-1 border border-gray-300 rounded p-2 text-sm"
              />
              <button type="button" className="px-4 py-2 border border-gray-300 rounded text-sm flex items-center gap-2">
                📍 Use Current Location
              </button>
            </div>
          </section>

          {/* Accident Details */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Accident Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description of Accident *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Briefly describe what happened, vehicles involved, time of accident, etc."
                className="w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <select name="severity" value={form.severity} onChange={handleChange} className="border rounded p-2 text-sm">
                <option value="">Select severity</option>
                <option value="minor">Minor</option>
                <option value="moderate">Moderate</option>
                <option value="major">Major</option>
              </select>
              <select name="vehicles" value={form.vehicles} onChange={handleChange} className="border rounded p-2 text-sm">
                <option value="">Select count</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <input
                type="datetime-local"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="border rounded p-2 text-sm"
              />
            </div>
          </section>

          {/* Evidence Upload */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Evidence (Optional)</h2>
            <div className="mb-4 border border-dashed border-gray-300 rounded p-6 text-center">
              <label className="cursor-pointer">
                <input type="file" multiple className="hidden" onChange={handleFileUpload} />
                <div className="flex flex-col items-center gap-1 text-gray-600">
                  <span className="text-3xl">🖼️</span>
                  <p><span className="text-red-500 font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB each</p>
                </div>
              </label>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Contact Information (Optional)</h2>
            <p className="text-sm text-gray-500 mb-2">
              Providing contact details helps us follow up if needed. This information will be kept confidential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name (optional)"
                className="border rounded p-2 text-sm"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXX XXXXX"
                className="border rounded p-2 text-sm"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="md:col-span-2 border rounded p-2 text-sm"
              />
            </div>
          </section>

          {/* CAPTCHA */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Verification</h2>
            <div className="mb-4 bg-gray-100 p-4 rounded flex items-center gap-4">
              <div className="text-lg font-mono bg-white px-4 py-2 border rounded">BLJZFW</div>
              <button type="button" className="text-blue-500">🔄</button>
            </div>
            <input
              name="captchaInput"
              value={form.captchaInput}
              onChange={handleChange}
              placeholder="Enter CAPTCHA"
              className="w-full border rounded p-2 text-sm mb-4"
            />
          </section>

          {/* Privacy Info */}
          <section>
            <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded text-sm mb-6">
              <strong>🔐 Privacy & Data Protection</strong><br />
              Your report is processed in compliance with the Digital Personal Data Protection Act, 2023. Personal information is encrypted and used only for accident investigation purposes.
            </div>
          </section>
        </form>
      </div>

      {/* Buttons */}
      <div className="max-w-4xl mx-auto flex justify-between gap-4 mt-6">
        <button
          type="submit"
          className="bg-[#B91C1C] text-white px-6 py-2 rounded hover:bg-red-700"
          onClick={handleSubmit}
        >
          Submit Accident Report
        </button>
        <button
          type="reset"
          onClick={() => setForm({ address: '', landmark: '', description: '', severity: '', vehicles: '', time: '', name: '', phone: '', email: '', captchaInput: '' })}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
        >
          Clear Form
        </button>
      </div>
    </div>
  );
};

export default PublicReport;
