export interface Skill {
	category: string;
	items: string[];
}

export interface Award {
	name: string;
	url?: string;
}

export interface Thesis {
	name: string;
	url: string;
	description?: string;
}

export interface Credential {
	name: string;
	date: string;
}

export interface Certification {
	issuer: string;
	credentials: Credential[];
}

export interface Education {
	degree: string;
	institution: string;
	period: string;
	thesis?: Thesis;
	awards: Award[];
	description: string;
	logo?: string;
}

export interface Achievement {
	text: string;
}

export interface Language {
	emoji: string;
	name: string;
	level: string;
}

export interface Hobby {
	name: string;
	description?: string;
}

export interface Project {
	company: string;
	companyUrl?: string;
	logo: string;
	position: string;
	period: string;
	description: string;
	technologies: string[];
	highlights: string[];
}
