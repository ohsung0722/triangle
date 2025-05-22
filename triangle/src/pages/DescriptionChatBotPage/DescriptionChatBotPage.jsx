import React from "react";
import './DescriptionChatBotPage.css'
import { ChatBot } from "../../components/ChatBot/ChatBot";

function DescriptionChatBotPage(){
    return(
        <div className="chatbotPage-main">
            <h1 className="chatbotPage-title">세모 챗봇 데모</h1>
            <p className="chatbotPage-description">오른쪽 하단의 채팅 아이콘을 클릭하여 챗봇과 대화를 시작해보세요. <br></br>관심있는 동아리를 간편하게 알려주는 세모만의 챗봇을 경험할 수 있습니다.</p>
            <ChatBot/>
        </div>
    )
}

export {DescriptionChatBotPage}