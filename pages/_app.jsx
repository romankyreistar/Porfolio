import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";
import { ThemeProvider } from "styled-components";

import { blueTheme, whiteTheme } from "@/styles/Theme";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={blueTheme}>
				<LayoutTemplate>
					<Component {...pageProps} />
				</LayoutTemplate>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
