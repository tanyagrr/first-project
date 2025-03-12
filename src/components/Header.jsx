function Header() {
  return (
    <>
      <header>
        <div className="header-logo">LearnIt!</div>
        <nav>
          <div class="header-elements">
            <a href="/" className="header-el create">
              Create
            </a>
            <a href="/" className="header-el community">
              Community
            </a>
            <a href="/" className="header-el about-us">
              About us
            </a>
            <a href="/" className="header-el login">
              Log in
            </a>
            <input type="text" placeholder="Search.."></input>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
