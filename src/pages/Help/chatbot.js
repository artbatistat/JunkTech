import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#0078d7",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0078d7",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Olá! Como posso ajudar você?",
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
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default HelpChatbot;