export interface ITrailer {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date,
    id: string;
}

export interface ITrailers{
    id: string;
    results: ITrailer[]
}
