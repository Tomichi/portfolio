export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	readingTime: number;
	excerpt: string;
	coverImage: string;
	content?: string;
	tags: string[];
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'startup-life-count-to-five',
		title: 'Startup Life Count to Five',
		date: '2025-01-26',
		readingTime: 3,
		excerpt:
			"At twenty-five, I faced a pivotal career choice: chase stability or pursue the unknown in a robotics startup. Here's my story of choosing the path less traveled, complete with mechanical toddlers, expensive if statements, and a team of Tomáš.",
		coverImage: '/robot.webp',
		content: `
            <p>In 2020, I faced a choice that would define my career: chase stability or pursue the unknown. At twenty-five, standing at this crossroads, I chose the path that seemed to glow with possibility - even if it meant disappointing every sensible adult in my life.</p>
     
            <p>The path wasn't straight. My first "sure thing" - a position at a pharmaceutical startup in Prague - vanished just days before my final exams. But sometimes, the best opportunities come disguised as setbacks.</p>
     
            <p>That's how I found myself in Brno, walking into an interview at a robotics company. Two hours later, I walked out with a contract and a grin I couldn't wipe off my face. All I needed was to survive finals and find an apartment.</p>
     
            <p>I joined what we affectionately called the "Tomáš Team." We had a running joke - if your name wasn't Tomáš, you were the odd one out. Poor Martin became our honorary Tomáš within weeks. Together, we taught robots to do what toddlers learn naturally - pick up objects. Except our toddler was made of metal and code, and definitely had more tantrums.</p>
     
            <p>Working at a startup is like running an experimental kitchen - you're constantly creating new recipes, testing flavors, and sometimes things explode. But when the dish works? Pure magic. Like the time I fixed what turned out to be the most expensive "if" statement in my life - a tiny bug in a GPU library that was causing our robot to act like it had too much coffee.</p>
     
            <p>Within months, I was deep in the heart of it all. The pinnacle came when we took our robot to France for a crucial demonstration. Different lighting, new environment - it was like asking a concert pianist to perform on a keyboard they'd never touched. But our mechanical virtuoso hit every note perfectly.</p>
     
            <p>When people ask about my startup journey, I talk about the transformation of code into elegant mechanical movement. That feeling when months of work suddenly come alive before your eyes - that's something words can't capture. That's why I chosed this path.</p>
        `,
		tags: ['startup', 'robotics', 'career', 'personal story', 'software engineering']
	}
];
