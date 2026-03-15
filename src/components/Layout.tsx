import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "LAB ENJ", path: "/lab-enj/context" },
  { label: "Facilitation", path: "/facilitation" },
  { label: "Impact", path: "/impact" },
  { label: "Samsung", path: "/samsung" },
  { label: "Business Design", path: "/business-design" },
  { label: "Methodology", path: "/methodology" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/" className="font-serif text-lg font-medium tracking-tight">
            Laura
          </Link>
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`link-underline text-sm transition-colors duration-200 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden caps-label p-2"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm ${
                      location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-14">
        {children}
      </main>

      <footer className="border-t border-border py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <p className="font-serif text-lg font-medium">Laura</p>
              <p className="mt-2 text-sm text-muted-foreground">Strategic Designer</p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="caps-label mb-4">Connect</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="link-underline cursor-pointer">LinkedIn</span>
                <span className="link-underline cursor-pointer">Email</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 text-sm text-muted-foreground">
              <p className="caps-label mb-4">Currently</p>
              <p>POLI.Design — Politecnico di Milano</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
