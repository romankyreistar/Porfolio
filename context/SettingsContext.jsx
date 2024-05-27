import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

// List of themes
import { darkTheme, lightTheme } from "@/styles/Theme";

// Language packs
import ptbrJson from "@/config/localization/ptbr.json";
import enusJson from "@/config/localization/enus.json";

// Create a context with default values
export const SettingsContext = createContext();

const listaTemas = {
	dark: darkTheme,
	light: lightTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(darkTheme);
	const [changeLanguage, setLanguage] = useState(true);

	const changeTheme = (newTheme) => {
		setTheme(listaTemas[newTheme]);
	};

	const changeLanguageLocalization = () => {
		setLanguage((prevLanguage) => !prevLanguage);
	};

	const language = changeLanguage ? enusJson : ptbrJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, changeLanguageLocalization, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
