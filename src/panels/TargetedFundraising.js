import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {
    Button,
    FormLayout,
    FormLayoutGroup,
    FormStatus,
    Input,
    PanelHeaderBack,
    Select,
    Textarea
} from "@vkontakte/vkui";
import {Icon28PictureOutline} from "@vkontakte/icons";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Fundraising = ({id, go, type}) => {
    const [name, setName] = useState("");
    const [fund, setFund] = useState("");
    const [target, setTarget] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [imageStyle, setImageStyle] = useState(false);

    const [isValid, setValid] = useState(true);

    const [nameCorrect, setNameCorrect] = useState("");
    const [fundCorrect, setFundCorrect] = useState("");
    const [targetCorrect, setTargetCorrect] = useState("");
    const [descCorrect, setDescCorrect] = useState("");

    useEffect(() => {
        if (image) {
            let img = image.files[image.files.length - 1].name;
            let reader = new FileReader();

            reader.onload = (e) => {
                setImageStyle(e.target.result);
            }

            reader.readAsDataURL(image.files[0]);
        }
    }, [image]);


    return (
        <Panel id={id}>
            <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => {
                go('mode')
            }}/>}>
                {type === "regular" ? "Регулярный сбор" : "Целевой сбор"}
            </PanelHeader>
            {!isValid && <Div>
                <FormStatus mode="error" header={"Проверьте правильность заполнения полей"}>
                    Одно или несколько полей были заполнены неверно.
                </FormStatus>
            </Div>}
            <input type="file" id="image-input" style={{display: "none"}} onChange={e => {
                setImage(e.target)
            }}/>
            <Div style={{marginTop: 0}} onClick={() => {
                document.getElementById("image-input").click();
            }}>
                <div className={"Cover" + (imageStyle ? " CoverImgContains" : "")}>
                    <img className="CoverImg" src={imageStyle}/>
                    <div className={"CoverText" + (imageStyle ? " CoverImgContainsText" : "")}>
                        <Icon28PictureOutline/>Загрузить обложку
                    </div>
                </div>
            </Div>
            <FormLayout>
                <FormLayoutGroup top="Название сбора">
                    <Input
                        placeholder="Название сбора"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        status={nameCorrect}
                    />
                </FormLayoutGroup>
                <FormLayoutGroup top="Сумма, ₽">
                    <Input
                        type="number"
                        placeholder={type === "regular" ? "Сколько нужно в месяц?" : "Сколько нужно собрать?"}
                        value={fund}
                        onChange={e => {
                            setFund(e.target.value)
                        }}
                        status={fundCorrect}
                    />
                </FormLayoutGroup>
                <FormLayoutGroup top="Цель">
                    <Input
                        placeholder={type === "regular" ? "Например, поддержка приюта" : "Например, лечение человека"}
                        value={target}
                        onChange={e => {
                            setTarget(e.target.value)
                        }}
                        status={targetCorrect}
                    />
                </FormLayoutGroup>
                <FormLayoutGroup top="Описание">
                    <Textarea
                        placeholder="На что пойдут деньги и как они кому-то помогут?"
                        value={desc}
                        status={descCorrect}
                        onChange={e => {
                            setDesc(e.target.value)
                        }}/>
                </FormLayoutGroup>
                <FormLayoutGroup top="Куда получать деньги">
                    <Select>
                        <option value="vkpay">Счёт VK Pay · 1234</option>
                        <option value="sber">Счёт Сбербанк · 1234</option>
                    </Select>
                </FormLayoutGroup>
                {type === "regular" && <FormLayoutGroup top="Автор">
                    <Select>
                        <option value="people1">Матвей Правосудов</option>
                        <option value="people1">unfoxteam</option>
                    </Select>
                </FormLayoutGroup>}
            </FormLayout>
            <Div>
                <Button onClick={() => {
                    let hasErrors = false;
                    if (name.length === 0) {
                        setNameCorrect("error");
                        hasErrors = true;
                    } else {
                        setNameCorrect("")
                    }
                    if (fund.length === 0 || parseInt("fund") <= 0) {
                        setFundCorrect("error");
                        hasErrors = true;
                    } else {
                        setFundCorrect("")
                    }
                    if (desc.length === 0) {
                        setDescCorrect("error");
                        hasErrors = true;
                    } else {
                        setDescCorrect("")
                    }
                    if (target.length === 0) {
                        setTargetCorrect("error");
                        hasErrors = true;
                    } else {
                        setTargetCorrect("")
                    }
                    if (hasErrors === true) {
                        setValid(false);
                        window.scroll(0, 0);

                    } else {
                        setValid(true);
                        if (localStorage.cache === undefined || localStorage.items === undefined) {
                            localStorage.cache = {};
                        }
                        localStorage.cache = JSON.stringify({
                            type,
                            name,
                            fund,
                            target,
                            desc,
                            "image": imageStyle ? imageStyle : "none"
                        });
                        if (type === "targeted") {
                            go("opts");
                        } else {
                            go("newsfeed_edit")
                        }
                    }
                }} size="xl">Далее</Button>
            </Div>
        </Panel>
    );

};

export default Fundraising;
