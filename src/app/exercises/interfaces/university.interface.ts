export interface University {
    country: Country;
    alpha_two_code: AlphaTwoCode;
    name: string;
    "state-province": null | string;
    domains: string[];
    web_pages: string[];
}

export enum AlphaTwoCode {
    Es = "ES",
}

export enum Country {
    Spain = "Spain",
}