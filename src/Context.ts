import { createContext } from 'react';

import { IAuthor } from 'helpers/authorsString';

export interface ICourseBase {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
}

export interface ICourse extends ICourseBase {
	authors: string[];
}

// type TcbState = <T>(prev: T[]) => T[];

interface IContext {
	isLoggined: boolean;
	onClickHandle: () => void;
	filter: string;
	setFilter: (filter: string) => void;
	courses: ICourse[];
	setCourses: (cb: (prev: ICourse[]) => ICourse[]) => void;
	authors: IAuthor[];
	setAuthors: (cb: (prev: IAuthor[]) => IAuthor[]) => void;
	setIsLoggined: (value: boolean) => void;
}

export const Context = createContext<IContext | null>(null);
