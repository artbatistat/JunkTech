import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import photo from "./img/garbage.png"

const theme = {
  background: "rgba(246,246,246)",
  fontFamily: "Host Grotesk, sans-serif",
  headerBgColor: "rgba(244,81,30)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "rgba(244,81,30)",
  botFontColor: "#fff",
  userBubbleColor: "rgba(244,81,30,0.6)",
  userFontColor: "#fff",
};

const CustomHeader = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '10px', 
    backgroundColor: 'rgba(244,81,30)',
    color: '#fff'
  }}>
    <h3 style={{ margin: 0 }}>Jubileu</h3>
  </div>
)

const steps = [
  {
    id: "1",
    message: "Olá sou o Jubileu ! Como posso ajudar você?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "problema", label: "Tenho um problema", trigger: "3" },
      { value: "informacao", label: "Preciso de informações", trigger: "4" },
    ],
  },
  {
    id: "3",
    message: "Por favor, descreva seu problema.",
    end: true,
  },
  {
    id: "4",
    message: "Sobre o que você gostaria de saber?",
    end: true,
  },
];

const HelpChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} headerComponent={<CustomHeader/>} botAvatar={photo} />
    </ThemeProvider>
  );
};

export default HelpChatbot;