import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { SetStateAction } from "jotai";
import { ReactNode } from "react";

export interface Children {
    children: ReactNode[] | JSX.Element;
}

export interface Posts {
    posts: [
        eachPost: {
            postLink: string;
            subreddit: string;
            url: string;
            title: string;
            author: string;
        }
    ];
}

export interface Event {
    target: {
        value: string;
    }
    preventDefault: () => void;
}

export interface Search {
    setSearch: (update: SetStateAction<string>) => void;
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

export interface Pagination {
    pageNumbers?: [
        { page: number }
    ]
    postsPerPage: number;
    totalPosts: number;
    paginate: (args: number) => void;
}