module Models{
    export interface PaginatedContainer<T> {
        Results: Array<T>;
        TotalCount: number;
    }
} 