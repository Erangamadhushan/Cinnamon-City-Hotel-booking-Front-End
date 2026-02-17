// import { useState } from "react";
import { Link } from "react-router-dom";

// import { useAuth } from "../../hooks/useAuth";
// import toast from "react-hot-toast";

const IconBase = ({ size = 20, className = '', children }) => (
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
)

const IconMenu = (props) => (
  <IconBase {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </IconBase>
)

const IconX = (props) => (
  <IconBase {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
)

const IconPhone = (props) => (
  <IconBase {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.55-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
  </IconBase>
)

const IconCalendar = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </IconBase>
)

const IconBed = (props) => (
  <IconBase {...props}>
    <path d="M3 7v10" />
    <path d="M21 17V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3" />
    <path d="M3 13h18" />
  </IconBase>
)

const IconUser = (props) => (
  <IconBase {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconBase>
)

export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [modal, setModal] = useState(null); // 'signin' | 'signup' | null
//   const [showProfile, setShowProfile] = useState(false);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [theme, setTheme] = useState("light"); // 'light' | 'dark'
//   const [themeMenu, setThemeMenu] = useState(false);
//   const navItems = [
//     { label: "Home", to: "/" },
//     { label: "Contact", to: "/contact" },
//   ];
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 shadow-sm dark:bg-gray-900/80 dark:border-gray-800 supports-backdrop-filter:dark:bg-gray-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
                        <IconBed />
                    </span>
                    <span className="text-lg">Cinnamon City Hotel Booking</span>
                </Link>

            </div>
        </div>
    </header>
  );
}
