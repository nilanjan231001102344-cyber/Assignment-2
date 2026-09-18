import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  const students = [
    {
      name: "Promit Sen",
      rollNumber: "BCA001",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "Rahul Sharma",
      rollNumber: "BCA002",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Ananya Das",
      rollNumber: "BCA003",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 8.9,
      photo: "https://i.pravatar.cc/300?img=5"
    },
    {
      name: "Arjun Roy",
      rollNumber: "BCA004",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 7.8,
      photo: "https://i.pravatar.cc/300?img=13"
    },
    {
      name: "Sneha Ghosh",
      rollNumber: "BCA005",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Amit Kumar",
      rollNumber: "BCA006",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 8.3,
      photo: "https://i.pravatar.cc/300?img=68"
    }
  ];

  return (
    <div className="app">
      <Header
        title="Student Information Portal"
        subtitle="Student Information Management System"
      />

      <StudentList students={students} />

      <Footer />
    </div>
  );
}

export default App;