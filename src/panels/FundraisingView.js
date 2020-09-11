import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Button, FixedLayout, PanelHeaderBack, Progress, Separator} from "@vkontakte/vkui";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

const FundraisingView = ({id, go}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        let i = JSON.parse(localStorage.cache);
        setData(i);
    }, []);

    return (
        <Panel id={id}>
            <PanelHeader separator={false} left={<PanelHeaderBack style={{color: "white"}} onClick={() => {
                go("newsfeed")
            }}/>} transparent/>
            <img className="Fundraising_img" src={data.image}
                 style={{width: "100%", height: 196, objectFit: "cover", marginTop: -56}}/>
            <Div className="Fundraising_titles">
                <div className="Fundraising_title">{data.name}</div>
                <div className="Fundraising_subtitle">Автор Матвей Правосудов</div>
                <div
                    className="Fundraising_type">{data.type === "targeted" ? "Закончится через n дней" : "Помощь нужна каждый месяц"}</div>
            </Div>
            <Separator/>
            <Div>
                <Text>Нужно собрать в сентябре</Text>
                <div className="Fundraising_progress">
                    <div className="Fundraising_track">8 750₽</div>
                    <div className="Fundraising_progress_end">10 000₽</div>
                </div>
            </Div>
            <Separator/>
            <Div>
                {data.desc}
            </Div>
            <Separator wide/>

            <FixedLayout vertical="bottom" filled>
                <Div style={{display: "flex", alignItems: "center"}}>
                    <div className="Attachment_progress">
                        <div className="Attachment_progress_title">Помогите первым</div>
                        <Progress value={75}/>
                    </div>
                    <div className="Att_button">
                        <Button mode="commerce">Помочь</Button>
                    </div>
                </Div>
            </FixedLayout>
        </Panel>
    );

};

export default FundraisingView;
