function getBotResponse(input) {
    //rock paper scissors
    if (input == "onde ficam as prensas?" || input == "as prensas" || input == "onde encontro prensas pneumaticas" || input == "gostaria de saber onde ficam as prensas" || input == "quanto custa as prensas?" || input == "qual valor das prensas?") {
        return "Para encontrar as prensas é só clicar em projetos nas abas acima do site. Posso ajudá-lo com algo mais?";
    } else if (input == "não, só isso mesmo, obrigado") {
        return "eu que agradeço pelo interesse. Tenha um ótimo dia";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "olá" || input == "oi") {
        return "Olá!";
    }else if (input == "como você está?" || input == "tudo bem?") {
        return "Estou bem, como posso ajudar? :)";
    }else if (input == "tchau") {
        return " Tchau, tenho um ótimo dia!";
    } else {
        return "Desculpe, não entendi. Clique no símbolo de WhatsApp para te ajudarmos melhor. Afinal, sou apenas um ajudante virtual, desculpe.";
    }
    

    // Default Response
}