type Status = "playing" | "paused" | "finished";
type Genre = "action" | "rhythm" | "simulation" | "other";

type GameFilter = (game: Game) => boolean;
type GameTitleGetter = (game: Game) => string;

/**type Game = {
    id: number;
    title: string;
    playHour: number;
    status: Status;
    genre: Genre;
};**/

interface Game {
    id: number;
    title: string;
    playHour: number;
    status: Status;
    genre: Genre;
};

const game: Game = {
    id: 1,
    title: "Minecraft",
    playHour: 120,
    status: "finished",
    genre: "simulation"
};

const rhythm: Game = {
    id: 2,
    title: "Arcaea",
    playHour: 520,
    status: "paused",
    genre: "rhythm"
};

const sns: Game = {
    id: 3,
    title: "VRChat",
    playHour: 120,
    status: "playing",
    genre: "simulation"
}

const games: Game[] = [game, rhythm, sns];

function getTitles(games: Game[]): string[] {
    const titles: string[] = games.map((game: Game): string => {
        return game.title;
    });
    return titles;
}
console.log(getTitles(games));

function getOverHourGames(games: Game[]): Game[] {
    const longGames: Game[] = games.filter((game: Game): boolean => {
        return game.playHour >= 200;
    });
    return longGames;
}
console.log(getOverHourGames(games));

function getOverHourTitles(games: Game[]): string[] {
    const longTitles: string[] = games
        .filter((game: Game): boolean => game.playHour >= 200)
        .map((game: Game): string => game.title);
    return longTitles;
}
console.log(getOverHourTitles(games));

function findGameById(games: Game[], id: number): Game | undefined {
    const result: Game | undefined = games.find((game: Game): boolean => {return game.id === id});
    return result;
}
console.log(findGameById(games, 2));
console.log(findGameById(games, 999));

function showGameTitleById(games: Game[], id: number): void {
    const result: Game | undefined = games.find((game: Game): boolean => {return game.id === id});
    if (result !== undefined) console.log(result.title);
}

const isLongGame: GameFilter = (game: Game) => {
    return game.playHour >= 200;
}
const longGames: Game[] = games.filter(isLongGame);

const getTitle: GameTitleGetter = (game: Game) => {
    return game.title;
}

function filterGames(
    games: Game[],
    filter: GameFilter
): Game[] {
    return games.filter(filter);
}
const longGames_ = filterGames(games, isLongGame);

const isSimulationGame: GameFilter = (game) => {
    return game.genre === "simulation";
}
const simulationGames = filterGames(games, isSimulationGame);

function findFirst<T>(
    items: T[], 
    predicate: (item: T) => boolean
): T | undefined {
    return items.filter(predicate).at(0);
}

/**async function getNumber(): Promise<number> {
    return 124;
}
async function main(): Promise<void> {
    const result = await getNumber();
    console.log(result);
}

function waitOneSecond(): Promise<string> {
    return new Promise<strung>((resolve) => {
        setTimeout(() => {
            resolve("完了！");
        }, 1000);
    })
}
async function main_(): Promise<void> {
    const result = await waitOneSecond();
    console.log(result);
}

async function getGames(): Promise<Game[]> {
    return games;
}
async function main(): Promise<void> {
    const gameArray = await getGames();
    for (let i = 0; i < gameArray.length; i++) {
        console.log(gameArray[i].title);
    }
}**/

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}
main();