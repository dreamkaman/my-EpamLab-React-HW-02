import { createContext } from 'react';

import { IAuthor } from 'helpers/authorsString';

export interface ICourseBase {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
}

interface ICourse extends ICourseBase {
	authors: string[];
}

interface IContext {
	isLoggined: boolean;
	onClickHandle: () => void;
	filter: string;
	setFilter: (filter: string) => void;
	courses: ICourse[];
	setCourses: (courses: ICourse[]) => void;
	authors: IAuthor[];
	setAuthors: (authors: IAuthor[]) => void;
	setIsLoggined: (value: boolean) => void;
}

export const Context = createContext<IContext | null>(null);
