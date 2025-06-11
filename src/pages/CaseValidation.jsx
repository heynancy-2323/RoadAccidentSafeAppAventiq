import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const dummyData = [
  {
    id: "FLD202505160001",
    officer: "Officer Sharma",
    time: "2 hours ago",
    location: "Sector 15, Main Road near Metro Station",
    vehicles: "2 vehicles (Car, Motorcycle)",
    casualties: "2 injuries, 0 fatalities",
    photos: 5,
    videos: 2,
    gps: true,
    status: "Pending Review",
    severity: "Severe",
  },
  {
    id: "FLD202505160002",
    officer: "Officer Kumar",
    time: "4 hours ago",
    location: "NH-19, Near BPTP Park Junction",
    vehicles: "3 vehicles (Car, Truck, Auto)",
    casualties: "1 injury, 0 fatalities",
    photos: 8,
    videos: 1,
    gps: true,
    status: "Pending Review",
    severity: "Moderate",
  },
  {
    id: "FLD202505160003",
    officer: "Officer Singh",
    time: "6 hours ago",
    location: "Sector 21, Residential Area",
    vehicles: "2 vehicles (Car, Bicycle)",
    casualties: "0 injuries, 0 fatalities",
    photos: 3,
    videos: 0,
    gps: true,
    status: "Verified",
    severity: "Minor",
    closedNote: "Case closed - Small profile"
  },
];

const CaseValidation = () => {
  const [status, setStatus] = useState("All Status");
  const [severity, setSeverity] = useState("All Severities");
  const [dateRange, setDateRange] = useState("All Dates");
  const [search, setSearch] = useState("");
  const [reports, setReports] = useState(dummyData);

  const handleFilter = () => {
    let filtered = dummyData;
    if (status !== "All Status") {
      filtered = filtered.filter(r => r.status === status);
    }
    if (severity !== "All Severities") {
      filtered = filtered.filter(r => r.severity === severity);
    }
    if (search) {
      filtered = filtered.filter(r =>
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    setReports(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [status, severity, search]);

  return (
    <div className="flex-1 p-6 bg-[#F9FAFB] h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Case Validation</h1>
          <p className="text-gray-600">Review and validate field officer reports for accuracy and completeness</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600">12 pending validations</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div >
            <label className="text-sm font-medium text-gray-700 mb-2 block ">Status</label>
            <Select onValueChange={setStatus} defaultValue="All Status">
              <SelectTrigger className="w-full border-0 focus:ring-0 focus:border-0 bg-gray-100">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0">
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Pending Review">Pending Review</SelectItem>
                <SelectItem value="Verified">Verified</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Severity</label>
            <Select onValueChange={setSeverity} defaultValue="All Severities">
              <SelectTrigger className="w-full border-0 focus:ring-0 focus:border-0 bg-gray-100">
                <SelectValue placeholder="All Severities" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0">
                <SelectItem value="All Severities">All Severities</SelectItem>
                <SelectItem value="Severe">Severe</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Minor">Minor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
            <Select onValueChange={setDateRange} defaultValue="All Dates">
              <SelectTrigger className="w-full border-0 focus:ring-0 focus:border-0 bg-gray-100">
                <SelectValue placeholder="All Dates" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0">
                <SelectItem value="All Dates">All Dates</SelectItem>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Search</label>
            <Input
              placeholder="Report ID or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-0 focus:ring-0 focus:border-0 bg-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Reports Pending Validation</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report) => (
            <div key={report.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Report Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{report.id}</h3>
                    <Badge 
                      variant={report.status === 'Pending Review' ? 'secondary' : 'default'}
                      className={
                        report.status === 'Pending Review' 
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200' 
                          : 'bg-green-100 text-green-800 border-green-200'
                      }
                    >
                      {report.status}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={
                        report.severity === 'Severe' 
                          ? 'bg-red-100 text-red-700 border-red-200' 
                          : report.severity === 'Moderate' 
                          ? 'bg-orange-100 text-orange-700 border-orange-200' 
                          : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                      }
                    >
                      {report.severity}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Submitted by {report.officer} • {report.time}
                  </p>

                  {/* Report Details Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700">{report.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Vehicles Involved</h4>
                      <p className="text-gray-700">{report.vehicles}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Casualties</h4>
                      <p className="text-gray-700">{report.casualties}</p>
                    </div>
                  </div>

                  {/* Media and GPS Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>📷</span>
                      <span>{report.photos} photos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🎥</span>
                      <span>{report.videos} video{report.videos !== 1 ? 's' : ''}</span>
                    </div>
                    {report.gps && (
                      <div className="flex items-center gap-1">
                        <span>📍</span>
                        <span>GPS verified</span>
                      </div>
                    )}
                  </div>

                  {/* Closed Note */}
                  {report.closedNote && (
                    <div className="mt-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {report.closedNote}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 ml-6">
                  {report.status === "Verified" ? (
                    <Button variant="outline" className="min-w-[140px]">
                      View Report
                    </Button>
                  ) : (
                    <>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white min-w-[140px]">
                        Review Report
                      </Button>
                      <Button variant="ghost" className="min-w-[140px] bg-gray-100">Request Clarification</Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing 1 to {reports.length} of 12 reports
        </p>
        <div className="flex gap-1">
          <Button variant="outline" size="sm">Previous</Button>
          <Button size="sm" className="bg-blue-600 text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseValidation;