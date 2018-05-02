import { Config } from '../config';
import { BoardPosition } from '../models/Annotation';

class ApiClient {

    static getKnightMoves(annottation: BoardPosition): Promise<BoardPosition[]> {
        const url = this.getUrl(`/knight/${annottation}/moves/`);

        return fetch(url)
            .then(this.transformToJson)
            .catch(this.handleError);
    }

    private static getUrl(path: string): string {
        return Config.baseUrl + path;
    }

    private static transformToJson(response: Response): Promise<any> {
        return response.json();
    }

    private static handleError(response: Response): Error {
        return new Error(response.statusText);
    }

}

export { ApiClient }