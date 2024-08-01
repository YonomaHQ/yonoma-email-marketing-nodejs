import { Contacts } from "./Contacts";
import { Email } from "./Email";
import { Groups } from "./Groups";
import { Tags } from "./Tags";
import { version } from "../../package.json";

export class Yonoma {
    readonly tags: Tags;
    readonly groups: Groups;
    readonly contacts: Contacts;
    readonly email: Email;

    #baseUrl: string;
    #userAgent: string;
    #apikey: string;

    constructor(apikey: string) {
        if (!apikey) {
            throw new Error('API key is missing. Please pass it to the constructor - new Yonoma("YOUR_API_KEY")');
        }
        this.#apikey = apikey;
        this.#baseUrl = "https://api.yonoma.io/v1";
        this.#userAgent = `yonoma-node:${version}`;

        this.tags = new Tags(this);
        this.groups = new Groups(this);
        this.contacts = new Contacts(this);
        this.email = new Email(this);
    }

    async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.#baseUrl}${endpoint}`;
        const headers = new Headers({
            Authorization: `Bearer ${this.#apikey}`,
            "User-Agent": this.#userAgent,
            "Content-Type": "application/json",
        });
        const config = {
            ...options,
            headers,
        };

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }
            return (await response.json()) as T;
        } catch (error: any) {
            const errorBody = JSON.parse(error.message as string);
            return errorBody;
        }
    }
}
