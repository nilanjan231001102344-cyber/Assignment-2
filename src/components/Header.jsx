function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header-content">

        <div className="header-icon">
          🎓
        </div>

        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

      </div>
    </header>
  );
}

export default Header;