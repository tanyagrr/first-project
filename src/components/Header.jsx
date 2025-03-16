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
            <button className="search-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="M2.75 7.5C2.75 4.87665 4.87665 2.75 7.5 2.75C10.1234 2.75 12.25 4.87665 12.25 7.5C12.25 10.1234 10.1234 12.25 7.5 12.25C4.87665 12.25 2.75 10.1234 2.75 7.5ZM7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75C8.95561 13.75 10.295 13.2524 11.3573 12.418L13.4697 14.5303C13.7626 14.8232 14.2374 14.8232 14.5303 14.5303C14.8232 14.2374 14.8232 13.7626 14.5303 13.4697L12.418 11.3573C13.2524 10.295 13.75 8.95561 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25Z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
