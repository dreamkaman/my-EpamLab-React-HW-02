import { createContext } from 'react';

interface ICourse {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: string;
	authors: string[];
}

interface IContext {
	isLoggined: boolean;
	onClickHandle: () => void;
	filter: string;
	setFilter: (filter: string) => void;
	courses: ICourse[];
	setCourses: (course: ICourse) => void;
	authors: string[];
	setAuthors: (author: string) => void;
	setIsLoggined: (value: boolean) => void;
}

export const Context = createContext<IContext | null>(null);
