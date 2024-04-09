export const OUTCOME_WIN: string = "WIN";
export const OUTCOME_DRAW: string = "DRAW";
export const OUTCOME_LOSS: string = "LOSS";

export const CHOICE_ROCK: string = "ROCK";
export const CHOICE_PAPER: string = "PAPER";
export const CHOICE_SCISSORS: string = "SCISSORS";

export function getRandomComputerMove(): string {
    const choice: number = Math.trunc(Math.random() * 3);
    switch (choice) {
        case 0:
            return CHOICE_ROCK;
        case 1:
            return CHOICE_PAPER;
        case 2:
            return CHOICE_SCISSORS;
        default:
            throw new Error(`Unsupported choice: ${choice}`);
    }
}

export function getPlayerMove(): string | null {
    while (true) {
        const rawInput: string | null = prompt("Enter a move: rock/paper/scissors");
        let input = rawInput as string;

        if (null === rawInput) {
            return null;
        }

        switch (input.toLowerCase()) {
            case "r":
            case "rock":
                return CHOICE_ROCK;
            case "p":
            case "paper":
                return CHOICE_PAPER;
            case "s":
            case "scissors":
                return CHOICE_SCISSORS;
        }
    }
}

export function getOutcomeForRound(playerChoice: string, computerChoice: string): string {
    const playerHasDrawn: boolean = playerChoice === computerChoice;

    if (playerHasDrawn) {
        return OUTCOME_DRAW;
    }

    const playerHasWon: boolean =
        (playerChoice === CHOICE_PAPER && computerChoice === CHOICE_ROCK) ||
        (playerChoice === CHOICE_SCISSORS && computerChoice === CHOICE_PAPER) ||
        (playerChoice === CHOICE_ROCK && computerChoice === CHOICE_SCISSORS);

    if (playerHasWon) {
        return OUTCOME_WIN;
    }

    return OUTCOME_LOSS;
}

interface RoundResult {
    playerMove: string,
    computerMove: string,
    outcome: string,
}

export function playOneRound(): RoundResult | null {
    const playerMove: string | null = getPlayerMove();
    if (null === playerMove) {
        return null;
    }

    const computerMove: string = getRandomComputerMove();
    const outcome: string = getOutcomeForRound(playerMove, computerMove);

    return {
        playerMove,
        computerMove,
        outcome,
    };
}

interface Model {
    playerScore: number,
    computerScore: number,
}

export function playGame(): void {
    let model: Model = {
        playerScore: 0,
        computerScore: 0,
    };

    while (true) {
        const dataForRound: RoundResult | null = playOneRound();

        if (null === dataForRound) {
            break;
        }

        model = updateModel(model, dataForRound);
        showProgressInConsole(dataForRound, model);
    }
}

export function updateModel(model: Model, dataForRound: RoundResult): Model {
    switch (dataForRound.outcome) {
        case OUTCOME_WIN:
            return {...model, playerScore: model.playerScore + 1};
        case OUTCOME_LOSS:
            return {...model, computerScore: model.computerScore + 1};
        default:
            return model;
    }
}

export function showProgressInConsole(dataForRound: RoundResult, model: Model): void {
    console.table([
        {
            "Your choice": dataForRound.playerMove,
            "Computer choice": dataForRound.computerMove,
            Outcome: dataForRound.outcome,
            "Your score": model.playerScore,
            "Computer score": model.computerScore,
        },
    ]);
}

playGame();