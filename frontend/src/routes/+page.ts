export const prerender = true;

import type {
	Education,
	Skill,
	Achievement,
	Certification,
	Language,
	Hobby,
	Project
} from '$lib/components/types';

export function load() {
	const education: Education[] = [
		{
			degree: "Master's in Computational Mathematics",
			institution: 'VSB - Technical University of Ostrava',
			logo: 'fei_logo.jpeg',
			period: '2018 - 2020',
			thesis: {
				name: 'Graph Theory Tools Used for BEM',
				url: 'https://dspace.vsb.cz/handle/10084/140601'
			},
			awards: [
				{
					name: 'Best Thesis Award 2020',
					url: 'https://www.vsb.cz/cs/detail-novinky/?reportId=41207&linkBack=%2Fcs%2Fo-univerzite%2Fnovinky%2Faktuality%2Findex.html'
				},
				{
					name: 'Graduated with honors'
				}
			],
			description:
				'Focused on solving discrete problems with boundary elements method in Laplace equation in 3D. Implemented parallel computation solutions using graph coloring techniques.'
		},
		{
			degree: "Bachelor's in Computational Mathematics",
			institution: 'VSB - Technical University of Ostrava',
			logo: 'fei_logo.jpeg',
			period: '2015 - 2018',
			thesis: {
				name: 'Graph labelings',
				url: 'https://dspace.vsb.cz/handle/10084/128474'
			},
			awards: [
				{
					name: 'Best Thesis Award 2018',
					url: 'https://www.fei.vsb.cz/470/cs/o-katedre/aktuality/detail-aktuality/index.html?reportId=37117&linkBack=%2F470%2Fcs%2Fstudium.old%2Foceneni-stu%2Findex.html'
				}
			],
			description:
				'Research in graph theory, focusing on parallel programming for graph labeling problems. Active member of ACM-ICPC and Support Talented Students program.'
		}
	];

	const skills: Skill[] = [
		{
			category: 'Data engineering',
			items: ['Python (FastAPI, Scrapy)', 'PostgreSQL', 'ETL Pipeline Design', 'Airflow', 'Docker']
		},
		{
			category: 'Machine learning & computer vision',
			items: [
				'PyTorch',
				'Deep Learning',
				'Computer Vision',
				'CUDA',
				'C++ (14/17)',
				'Parallel Computing'
			]
		},
		{
			category: 'Scientific computing',
			items: ['HPC', 'Graph Theory', 'NumPy', 'Computational Mathematics', 'Algorithm Design']
		}
	];

	const achievements: Achievement[] = [
		{
			text: '2nd Place at European Healthcare Hackathon - Hospital Surveillance AI Project (2023)'
		},
		{ text: 'Best Thesis Award - Applied Mathematics Department (2018 & 2020)' },
		{ text: 'Member of Support Talented Students Program (2016 - 2020)' },
		{
			text: 'ICPC Programming Contest: 3x CERC (Central European Regional Contest) Participant (2015 - 2017)'
		}
	];

	const certifications: Certification[] = [
		{
			issuer: 'NVIDIA',
			credentials: [
				{
					name: 'Fundamentals of Deep Learning for Computer Vision',
					date: 'Feb 2020'
				}
			]
		}
	];

	const languages: Language[] = [
		{
			emoji: '🇨🇿',
			name: 'Czech',
			level: 'Native'
		},
		{
			emoji: '🇬🇧',
			name: 'English',
			level: 'Upper Intermediate B2'
		},
		{
			emoji: '🇳🇴',
			name: 'Norwegian (Bokmål)',
			level: 'Basic A2'
		}
	];

	const hobbies: Hobby[] = [
		{
			name: 'Climbing & bouldering',
			description: 'Regular climber with focus on technical routes and problem solving'
		},
		{
			name: 'Hiking',
			description: 'Active mountaineer'
		},
		{
			name: 'Competitive programming',
			description: 'Project Euler (50+ problems), UVA Online Judge participant'
		},
		{
			name: 'Self-Learning',
			description: 'Continuous learning in mathematics, algorithms and new technologies'
		}
	];

	const projects: Project[] = [
		{
			company: 'Mediaboard',
			companyUrl: 'https://mediaboard.com',
			logo: 'mediaboard_logo.jpeg',
			position: 'Data engineer',
			period: '04/2025 - Present',
			description:
				'Working on NLP models for media content',
			technologies: ['Python', 'Django'],
			highlights: [
				'Working on NLP tasks',
			]
		},
		{
			company: 'Outfindo',
			companyUrl: 'https://outfindo.com',
			logo: 'outfindo_logo.jpeg',
			position: 'Data engineer',
			period: '08/2021 - 03/2025',
			description:
				'Developed ETL pipelines and data processing systems using Python, FastAPI, and Airflow',
			technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Airflow', 'Docker'],
			highlights: [
				'Implemented scalable data processing pipelines',
				'Built RESTful APIs with FastAPI',
				'Orchestrated ETL tasks using Airflow'
			]
		},
		{
			company: 'Sanezoo',
			companyUrl: 'https://sanezoo.com',
			logo: 'sanezoo_logo.jpeg',
			position: 'Computer vision engineer',
			period: '07/2020 - 07/2021',
			description: 'Computer vision solution for automated bin picking at Sanezoo',
			technologies: ['C++', 'CUDA', 'Python', 'Computer Vision'],
			highlights: [
				'Developed 3D object detection algorithms',
				'Optimized performance using CUDA',
				'Implemented real-time processing systems'
			]
		},
		{
			company: 'IT4Innovations',
			companyUrl: 'https://www.it4i.cz/',
			logo: 'it4innovations_logo.jpeg',
			position: 'Research engineer',
			period: '01/2019 - 06/2020',
			description:
				'Research on graph theory problems using high-performance computing at IT4Innovations',
			technologies: ['C++', 'HPC', 'Graph Theory', 'Parallel Computing'],
			highlights: [
				'Implemented parallel algorithms for graph problems',
				'Optimized computations for supercomputer architecture'
			]
		}
	];

	return {
		education,
		skills,
		achievements,
		certifications,
		languages,
		hobbies,
		projects,
		profile: {
			name: 'Tomáš Michna',
			role: 'Data engineer / R&D',
			professionalSummary:
				'Data Engineer & Research Engineer with expertise in computer vision and machine learning. Combining strong mathematical background with practical engineering skills to build scalable data solutions and intelligent systems. Experienced in high-performance computing and parallel programming.',
			contact: {
				email: 'contact@tomas-michna.com',
				location: 'Prague, Czech Republic',
				availability: 'Temporary unavailable for challenging opportunities',
				linkedInLink: 'https://www.linkedin.com/in/tomáš-michna-69760290/',
				githubLink: 'https://github.com/tomichi',
				icoNumber: '02090121',
				billingAddress: 'Hraniční 112, Frýdek-Místek, Czech Republic'
			}
		}
	};
}
