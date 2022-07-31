import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   } 
`;

const Main = styled.main`
	/* min-height: 100vh; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-family: "Amatic SC", cursive;
	font-size: 60px;
`;

const Footer = styled.footer`
	display: grid;
	place-items: center;

	color: #c8c8c8c8;
	font-family: "Amatic SC", cursive;
	font-size: 20px;

	padding: 40px;
`;

const PageLayout = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	min-height: 100vh;
`;

function App() {
	return (
		<PageLayout>
			<GlobalStyles />

			<Main>
				<div>notmishamakarov.lol</div>
			</Main>

			<Footer>© 2022 notmishamakarov.lol All Rights Reserved.</Footer>
		</PageLayout>
	);
}

export default App;
