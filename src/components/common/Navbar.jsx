import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const IconBase = ({ size = 20, className = "", children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const IconMenu = (props) => (
  <IconBase {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </IconBase>
);

const IconX = (props) => (
  <IconBase {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
);

const IconPhone = (props) => (
  <IconBase {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.55-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
  </IconBase>
);

const IconCalendar = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </IconBase>
);

const IconBed = (props) => (
  <IconBase {...props}>
    <path d="M3 7v10" />
    <path d="M21 17V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3" />
    <path d="M3 13h18" />
  </IconBase>
);

const IconUser = (props) => (
  <IconBase {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconBase>
);

const IconSun = (props) => (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </IconBase>
  )
  const IconMoon = (props) => (
    <IconBase {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </IconBase>
  )

const navItems = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null); // 'signin' | 'signup' | null
  const [showProfile, setShowProfile] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light"); // 'light' | 'dark'
  const [themeMenu, setThemeMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 shadow-sm dark:bg-zinc-900/80 dark:border-gray-800 supports-backdrop-filter:dark:bg-zinc-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center ">
              <img src="/logo.png" alt="Logo" className="h-full w-full" />
            </span>
            <span className="text-sm">
              Cinnamon City
              <br /> Hotel Booking
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+10000000000"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <IconPhone size={16} />
              <span className="hidden lg:inline">+1 (000) 000-0000</span>
            </a>
            {/* Theme toggle */}
            <div className="relative hidden sm:inline-flex">
              <button
                type="button"
                onClick={() => setThemeMenu((v) => !v)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setThemeMenu((v) => !v);
                }}
                title={`Theme: ${theme}`}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {/* Show sun in dark mode, moon otherwise */}
                <span className="dark:hidden">
                  <IconMoon size={18} />
                </span>
                <span className="hidden dark:inline">
                  <IconSun size={18} />
                </span>
              </button>
              {themeMenu && (
                <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:bg-zinc-900 dark:border-gray-800">
                  {["light", "dark"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => {
                        setTheme(t);
                        localStorage.setItem("theme", t);
                        setThemeMenu(false);
                        const isDark = t === "dark";
                        const root = document.documentElement;
                        if (isDark) {
                          root.classList.add("dark");
                        } else {
                          root.classList.remove("dark");
                        }
                        root.setAttribute(
                          "data-theme",
                          isDark ? "dark" : "light",
                        );
                        root.style.colorScheme = isDark ? "dark" : "light";
                        toast.success(`Theme set to ${t}`, { id: "theme" });
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === t ? "font-semibold" : ""}`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Auth-aware actions (desktop) */}
            {user == null ? (
              <div className="hidden md:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/login-user")}
                  className="btn btn-outline text-white dark:text-gray-300 hover:text-gray-300 dark:hover:text-white"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2 relative">
                <button
                  type="button"
                  onClick={() => setShowProfile((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-haspopup="menu"
                  aria-expanded={showProfile}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <IconUser size={16} className="text-white"/>
                  </span>
                  <span className="hidden lg:inline">
                    {user?.name || "Account"}
                  </span>
                </button>
                {showProfile && (
                  <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg transition-all dark:bg-zinc-900 dark:border-gray-800">
                    <div className="p-2">
                      {user.role === "admin" ? (
                        <Link
                          to="/admin/dashboard"
                          onClick={() => setShowProfile(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                          Admin Dashboard
                        </Link>
                      ) : (
                        <>
                          <Link
                            to="/dashboard"
                            onClick={() => setShowProfile(false)}
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          >
                            My Dashboard
                          </Link>
                          <Link
                            to="/my-bookings"
                            onClick={() => setShowProfile(false)}
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          >
                            My Bookings
                          </Link>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setShowProfile(false);
                          logout();
                          navigate("/");
                        }}
                        className="mt-1 w-full rounded-md bg-gray-100 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* Keep Book now CTA */}
            <Link
              to="/hotels"
              className="hidden md:inline-flex btn btn-primary"
            >
              <IconCalendar size={16} />
              Book now
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconX size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
