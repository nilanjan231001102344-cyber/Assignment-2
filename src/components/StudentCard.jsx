function StudentCard({
  name,
  rollNumber,
  department,
  semester,
  cgpa,
  photo
}) {
  return (
    <article className="student-card">

      <div className="card-top">

        <div className="student-photo">
          <img src={photo} alt={name} />
        </div>

        <div className="student-basic">

          <h3>{name}</h3>

          <p className="roll-number">
            Roll No: {rollNumber}
          </p>

        </div>

      </div>

      <div className="student-details">

        <div className="detail-item">
          <span>Department</span>
          <strong>{department}</strong>
        </div>

        <div className="detail-item">
          <span>Semester</span>
          <strong>{semester}</strong>
        </div>

      </div>

      <div className="cgpa-section">

        <div>
          <span>Current CGPA</span>
          <strong>{cgpa}</strong>
        </div>

        <div className="cgpa-badge">
          {cgpa >= 9
            ? "Excellent"
            : cgpa >= 8
            ? "Very Good"
            : "Good"}
        </div>

      </div>

    </article>
  );
}

export default StudentCard;