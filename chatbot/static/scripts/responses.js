function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    }else if (input == "how are you" || input == "What are you doing") {
        return "I am Fine :)";
    }else if (input == "goodbye") {
        return " Ok! Talk to you later!";
    } else {
        return "Try asking something else!";
    }

    // Default Response
}