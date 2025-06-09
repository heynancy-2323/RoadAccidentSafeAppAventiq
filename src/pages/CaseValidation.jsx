import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import  Input  from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } from "@/components/ui/select";
  


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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case Validation</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <Select onValueChange={setStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Status">All Status</SelectItem>
            <SelectItem value="Pending Review">Pending Review</SelectItem>
            <SelectItem value="Verified">Verified</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSeverity}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Severities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Severities">All Severities</SelectItem>
            <SelectItem value="Severe">Severe</SelectItem>
            <SelectItem value="Moderate">Moderate</SelectItem>
            <SelectItem value="Minor">Minor</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Dates" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Dates">All Dates</SelectItem>
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Report ID or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[250px]"
        />
      </div>

      <div className="space-y-4">
        {reports.map((r) => (
          <div key={r.id} className="border rounded-xl p-5 shadow-sm bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">{r.id}</h2>
                <p className="text-sm text-gray-500">Submitted by {r.officer} • {r.time}</p>
                <p className="mt-2 text-sm"><strong>Location:</strong> {r.location}</p>
                <p className="text-sm"><strong>Vehicles Involved:</strong> {r.vehicles}</p>
                <p className="text-sm"><strong>Casualties:</strong> {r.casualties}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{r.photos} photos</span>
                  <span>{r.videos} videos</span>
                  {r.gps && <span>📍 GPS verified</span>}
                </div>
                {r.closedNote && (
                  <p className="text-green-600 mt-1 text-sm">{r.closedNote}</p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <Badge variant="secondary">{r.status}</Badge>
                  <Badge className={r.severity === "Severe" ? "bg-red-500" : r.severity === "Moderate" ? "bg-orange-400" : "bg-yellow-300"}>
                    {r.severity}
                  </Badge>
                </div>
                {r.status === "Verified" ? (
                  <Button variant="outline">View Report</Button>
                ) : (
                  <>
                    <Button>Review Report</Button>
                    <Button variant="secondary">Request Clarification</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-6 gap-2">
        <Button variant="outline">Previous</Button>
        <Button variant="default">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};

export default CaseValidation;
