import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return 0;
  });

  return (
    <main className="student-section">

      <div className="section-heading">

        <div>
          <p className="section-label">STUDENT DIRECTORY</p>
          <h2>Student Information</h2>
          <p className="section-description">
            View academic information of all registered students.
          </p>
        </div>

        <div className="sort-box">

          <label htmlFor="sort">
            Sort by CGPA
          </label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="default">Default Order</option>
            <option value="high">Highest to Lowest</option>
            <option value="low">Lowest to Highest</option>
          </select>

        </div>

      </div>

      <div className="student-count">
        <span>{students.length}</span> Students Registered
      </div>

      <div className="student-grid">

        {sortedStudents.map((student) => (
          <StudentCard
            key={student.rollNumber}
            name={student.name}
            rollNumber={student.rollNumber}
            department={student.department}
            semester={student.semester}
            cgpa={student.cgpa}
            photo={student.photo}
          />
        ))}

      </div>

    </main>
  );
}

export default StudentList;