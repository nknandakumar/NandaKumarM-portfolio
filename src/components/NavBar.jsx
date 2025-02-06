import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "../data";
import { motion } from "framer-motion";
const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Function to toggle menu
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	// Function to close menu and scroll smoothly
	const handleNavClick = (e, item) => {
		e.preventDefault(); // Prevent default jump

		setIsMenuOpen(false); // Close mobile menu

		const target = document.getElementById(item.toLowerCase());
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	// Close menu when clicking outside
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (isMenuOpen && !event.target.closest("nav")) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	}, [isMenuOpen]);

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<nav className="mx-4 md:mx-10 my-4">
				<div className="flex justify-between font-main items-center p-6 rounded-2xl max-w-[700px] mx-auto bg-[#3c3c3c] shadow-[inset_0_-6px_19px_rgba(255,255,255,0.3)]">
					<h1 className="font-bold text-2xl text-white">
						<span className="text-[#ff4a23] mr-1">
							<FontAwesomeIcon icon={faFire} />
						</span>
						NK
					</h1>

					{/* Desktop Menu */}
					<ul className="hidden md:flex gap-8 select-none text-[16px] text-white">
						{NAV_ITEMS.map((item) => (
							<motion.li 
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 300 }}
							key={item} className="cursor-pointer font-second leading-relaxed hover:text-[#ff4a23] transition-colors">
								<a href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item)}>
									{item}
								</a>
							</motion.li>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<button className="md:hidden relative z-50" onClick={toggleMenu} aria-label="Toggle menu">
						<div className="flex flex-col gap-2 w-8">
							<div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 ${isMenuOpen ? "rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]" : ""}`}></div>
							<div className={`rounded-2xl h-[3px] w-full bg-white duration-500 ${isMenuOpen ? "-rotate-45" : ""}`}></div>
							<div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end ${isMenuOpen ? "rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]" : ""}`}></div>
						</div>
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`fixed inset-0 bg-opacity-50 transition-opacity duration-300 md:hidden bg-neutral-600  ${
						isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				>
					<div className={`absolute top-20 left-1/2 -translate-x-1/2 w-[280px] bg-[#3c3c3c] shadow-[inset_0_-6px_12px_rgba(255,255,255,0.3)]  rounded-lg  transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
						<ul className="py-8 flex flex-col items-center gap-6 text-white font-semibold">
							{NAV_ITEMS.map((item, index) => (
								<li
									key={index}
									onClick={(e) => handleNavClick(e, item)}
									className={`cursor-pointer hover:text-[#ff4a23] transition-colors w-full text-center ${
										index === NAV_ITEMS.length - 1 ? "border-t   border-gray-300 pt-6" : ""
									}`}
								>
									<a href={`#${item.toLowerCase()}`}>{item}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
