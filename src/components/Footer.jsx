function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>Student Portal</h3>
          <p>
            Student Information Management System
          </p>
        </div>

        <div>
          <p>
            Built with React & Props
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Student Information Portal
        </p>
      </div>

    </footer>
  );
}

export default Footer;