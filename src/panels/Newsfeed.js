import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Avatar, Button, PanelHeaderButton, Progress, Separator, TabsItem, Tappable} from "@vkontakte/vkui";
import {Icon28CameraOutline, Icon28Notifications} from "@vkontakte/icons";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";

const Newsfeed = ({id, go}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        let i = JSON.parse(localStorage.cache);
        setData(i);
    }, []);


    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton><Icon28CameraOutline/></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={() => {
                }}><Icon28Notifications/></PanelHeaderButton>}>
                <Tabs>
                    <TabsItem selected>Новости</TabsItem>
                    <TabsItem>Интересное</TabsItem>
                </Tabs>
            </PanelHeader>
            <div className="spacing"/>
            <Div>
                <div className="NewsFeed_header">
                    <Avatar size={44} style={{marginRight: 8}}/>
                    <div className="NewsFeed_header_texts">
                        <div className="NewsFeed_header_title">Матвей Правосудов</div>
                        <div className="NewsFeed_header_subtitle">только что</div>
                    </div>
                </div>
                <div className="NewsFeed_post_text">{data.text}</div>

                <Tappable style={{borderRadius: 10}} onClick={() => {
                    go("fundraising_view")
                }}>
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
                                    <div className="Attachment_progress_title">Собрано 8 750 ₽ из 10 000 ₽</div>
                                    <Progress value={70}/>
                                </div>
                                <div className="Att_button">
                                    <Button mode="outline">Помочь</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tappable>
            </Div>


        </Panel>
    );

};

export default Newsfeed;
