export interface Exchange {
    amount: number;
    base:   string;
    date:   string;
    rates:  { [key: string]: number };
}
