import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Button, FixedLayout, FormLayout, FormLayoutGroup, Input, PanelHeaderBack, Radio, Select} from "@vkontakte/vkui";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Additional = ({id, go}) => {
    const [when, setWhen] = useState("fullpaid");
    const [date, setDate] = useState(undefined);
    const [disable, setDisable] = useState(false);
    useEffect(() => {
        if (when === "monthlypaid") {
            if (date === undefined) {
                setDisable(true)
            } else {
                setDisable(false);
            }
        } else {
            setDisable(false);
        }
    }, [when, date])

    const check = () => {
        let i = JSON.parse(localStorage.cache);
        if (when === "fullpaid") {
            i.opts = {
                when
            }
        } else {
            i.opts = {
                when,
                date
            }
        }
        localStorage.cache = JSON.stringify(i);
        go('newsfeed_edit');
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={() => {
                go('fundraisingOpts')
            }}/>}>
                Дополнительно
            </PanelHeader>
            <FormLayout>
                <FormLayoutGroup top="Автор">
                    <Select>
                        <option value="people1">Матвей Правосудов</option>
                        <option value="people1">unfoxteam</option>
                    </Select>
                </FormLayoutGroup>
                <FormLayoutGroup top="Сбор завершится">
                    <Radio name="radio" value="1" defaultChecked onClick={() => {
                        setWhen("fullpaid")
                    }}>Когда соберём сумму</Radio>
                    <Radio name="radio" value="2" onClick={() => {
                        setWhen("monthlypaid")
                    }}>В определённую дату</Radio>
                </FormLayoutGroup>
                <FormLayoutGroup top="Дата окончания">
                    <Input disabled={when === "fullpaid"} type="date" value={date} onChange={(e) => {
                        setDate(e.target.value)
                    }}/>
                </FormLayoutGroup>
            </FormLayout>

            <FixedLayout vertical="bottom" filled>
                <Div>
                    <Button size="xl" disabled={disable} onClick={() => {
                        check()
                    }}>
                        Создать сбор
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );

};

export default Additional;
