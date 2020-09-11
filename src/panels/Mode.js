import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Banner, PanelHeaderBack} from "@vkontakte/vkui";
import {Icon28CalendarOutline, Icon28TargetOutline} from "@vkontakte/icons";

const Mode = ({id, go, setFundMode}) => (
    <Panel centered id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={() => {
            go('home')
        }}/>}>Тип сбора</PanelHeader>
        <div className="v-center">
            <Banner
                onClick={() => {
                    setFundMode("targeted");
                    go("fundraisingOpts")
                }}
                before={<Icon28TargetOutline style={{color: "var(--accent)"}}/>}
                asideMode="expand"
                header="Целевой сбор"
                subheader="Когда есть определённая цель"/>
            <Banner
                onClick={() => {
                    setFundMode("regular");
                    go("fundraisingOpts")
                }}
                before={<Icon28CalendarOutline style={{color: "var(--accent)"}}/>}
                asideMode="expand"
                header="Регулярный сбор"
                subheader="Если помощь нужна ежемесячно"/>
        </div>
    </Panel>
);

export default Mode;
