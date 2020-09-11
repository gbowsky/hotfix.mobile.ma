import React, {useEffect, useState} from 'react';
import "./index.css";
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Mode from "./panels/Mode";
import Fundraising from "./panels/TargetedFundraising";
import Additional from "./panels/Additional";
import NewsfeedEdit from "./panels/NewsfeedEdit";
import Newsfeed from "./panels/Newsfeed";
import FundraisingView from "./panels/FundraisingView";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [popout, setPopout] = useState();
	const [fundMode, setFundMode] = useState("targeted");

	useEffect(() => {

	}, []);

	const go = (e) => {
		setActivePanel(e);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Newsfeed id="newsfeed" go={go}/>
			<Home id='home' go={go}/>
			<Mode id='mode' go={go} setFundMode={setFundMode}/>
			<Fundraising id="fundraisingOpts" go={go} type={fundMode}/>
			<Additional id="opts" go={go}/>
			<NewsfeedEdit id="newsfeed_edit" go={go}/>
			<FundraisingView id="fundraising_view" go={go}/>
		</View>
	);
}

export default App;

