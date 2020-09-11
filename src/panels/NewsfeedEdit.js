import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Button, PanelHeaderBack, PanelHeaderButton, Progress, Separator} from "@vkontakte/vkui";
import {Icon28UploadOutline} from "@vkontakte/icons";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const NewsfeedEdit = ({id, go}) => {
    const [data, setData] = useState({});
    const [value, setText] = useState("");

    useEffect(() => {
        let i = JSON.parse(localStorage.cache);
        setData(i);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data])

    const check = () => {
        let i = JSON.parse(localStorage.cache);
        i.text = value;
        localStorage.cache = JSON.stringify(i);
        go('newsfeed');
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack/>} right={<PanelHeaderButton onClick={() => {
                check()
            }}><Icon28UploadOutline/></PanelHeaderButton>}>
                Матвей
            </PanelHeader>
            <input type="textarea" value={value} onChange={e => {
                setText(e.target.value)
            }} placeholder="Что у Вас нового?" className="Newsfeed_input"/>
            <Div style={{padding: "10px 8px"}}>
                <div className="Attachment">
                    <img className="Attachment_img" src={data.image ? data.image : ""}/>
                    <div className="Attachment_Infobar">
                        <div className="Attachment_titles">
                            <div className="Attachment_title">{data.name}</div>
                            <div className="Attachment_subtitle">Матвей Правосудов
                                · {data.type === "targeted" ? "Закончится через n дней" : "Помощь нужна каждый месяц"}</div>
                        </div>
                        <Separator wide/>
                        <div className="Attachment_status">
                            <div className="Attachment_progress">
                                <div className="Attachment_progress_title">Помогите первым</div>
                                <Progress/>
                            </div>
                            <div className="Att_button">
                                <Button disabled mode="outline">Помочь</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
        </Panel>
    );

};

export default NewsfeedEdit;
