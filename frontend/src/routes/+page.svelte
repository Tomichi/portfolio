<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Hero
	name={data.profile.name}
	role={data.profile.role}
	buttonText="Get in Touch"
	buttonHref="#contact"
/>
<AboutMe
	title="About me"
	subtitle="Data Engineer & Computer Vision Specialist with Strong Mathematical Foundation"
	professionalSummary={data.profile.professionalSummary}
	education={data.education}
	skills={data.skills}
	achievements={data.achievements}
	certifications={data.certifications}
	languages={data.languages}
	hobbies={data.hobbies}
/>
<Experience projects={data.projects} />
<Contact
	title="Let's Connect"
	subtitle="Seeking solutions to interesting tech puzzles? Drop me a line."
	email={data.profile.contact.email}
	location={data.profile.contact.location}
	availability={data.profile.contact.availability}
	linkedInLink={data.profile.contact.linkedInLink}
	githubLink={data.profile.contact.githubLink}
/>
