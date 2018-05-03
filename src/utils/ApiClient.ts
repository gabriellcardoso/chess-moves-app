import { Config } from '../config';
import { BoardPosition } from '../models/BoardPosition';

class ApiClient {

    static getKnightMoves(annottation: BoardPosition): Promise<BoardPosition[]> {
        const url = this.getUrl(`/knight/${annottation}/moves/`);
        return fetch(url).then(this.handleResponse);
    }

    private static getUrl(path: string): string {
        return Config.baseUrl + path;
    }

    private static handleResponse(response: Response): Promise<any> {
        if (response.status >= 400) {
            throw new Error(response.statusText);
        }

        return response.json();
    }

}

export { ApiClient };