import { User } from "entities/User";

export type ArticleBlockType = "CODE" | "IMAGE" | "TEXT" | "WARNING";

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: "CODE";
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: "IMAGE";
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: "TEXT";
    paragraphs: string[];
    title?: string;
}
export interface ArticleWarningBlock extends ArticleBlockBase {
    type: "WARNING";
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock
    | ArticleWarningBlock;

export type ArticleType = "ALL" | "IT" | "SCIENCE" | "ECONOMICS";

export type ArticleView = "LIST" | "TILE";
export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[] | ArticleType;
    blocks: ArticleBlock[];
}
