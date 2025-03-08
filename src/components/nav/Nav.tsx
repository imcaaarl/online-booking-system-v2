import './style.css';
export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="breadcrumb-container">
        <div className="breadcrumb-nav">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item text-gray-900 hover:text-blue-500">
                <a href="#/dashboard">
                  <p className="breadcrumb-link">dashboard</p>
                </a>
                <span className="breadcrumb-divider">/</span>
              </li>
              <li className="breadcrumb-item text-gray-900 hover:text-blue-500">
                <p>home</p>
              </li>
            </ol>
          </nav>
          <h6 className="nav-heading">home</h6>
        </div>

        <div className="flex items-center">
          <button className="icon-button xl:hidden">
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>

          <a href="#/auth/sign-in">
            <button className="sign-in-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
