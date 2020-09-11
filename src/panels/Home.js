import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Button, Placeholder} from "@vkontakte/vkui";

const Home = ({id, go}) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Placeholder stretched action={<Button size="l" onClick={() => {
			go('mode')
		}}>Создать сбор</Button>}>
			У Вас пока нет сборов.<br/>Начните доброе дело.
		</Placeholder>
	</Panel>
);

export default Home;
