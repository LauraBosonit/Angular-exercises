export interface USDExchange {
    amount:     number;
    base:       string;
    start_date: string;
    end_date:   string;
    rates:      { [key: string]: Rate };
}

export interface Rate {
    USD: number;
}
