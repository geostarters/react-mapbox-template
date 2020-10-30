// @flow

import React, { Component } from "react";
import logo from "../logo.svg";
import styles from "./App.module.css";
import { Map, LogoICGC } from "@geostarters/react-components";

class App extends Component {

	render() {

		return (
			<div className="App">

				<header className={styles.AppHeader}>
					<a className={styles.AppLink} href="https://github.com/geostarters/react-project-template" target="_blank" rel="noopener noreferrer" >
            ICGC react template
					</a>
				</header>

				<div className={styles.AppBody}>
					<div className={styles.containerMap}>
						<Map showAttribution={false}></Map>
					</div>
					<img src={logo} className={styles.AppLogo} alt="logo" />
				</div>

				<LogoICGC className={styles.AppLogo}></LogoICGC>

			</div>
		);

	}

}

export default App;
