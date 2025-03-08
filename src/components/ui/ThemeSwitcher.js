'use client'
import { useTheme } from "@/components/ui/ThemeContext"; // Adjust path as needed

const CustomThemeSwitcher = () => {
  const { setTheme } = useTheme(); // Access theme and setTheme from context

  const handleThemeChange = (newTheme, string) => {
    setTheme(newTheme); // Update the theme in context
  };

  

return (
    <div className="p-8">
        <div className="flex justify-center gap-4">
            <div>
            <button className="bg-gradient-to-r from-gray-300 to-gray-400 text-black font-bold py-2 px-4 rounded-lg cursor-pointer transition-all hover:scale-105 backdrop-blur-md" onClick={() => handleThemeChange("light")}>Light Theme</button>
            </div>
            <div>
            <button className="bg-gradient-to-r from-blue-950 to-blue-900 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-all hover:scale-105 backdrop-blur-md" onClick={() => handleThemeChange("dark")}>Dark Theme</button>
            </div>
            <div>
            <button className="bg-gradient-to-r from-[#4b2e2e] to-[#c4a484] text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-all hover:scale-105 backdrop-blur-md" onClick={() => handleThemeChange("forest")}>Forest Theme</button>
            </div>        
        </div>
    </div>
);
};

export default CustomThemeSwitcher;