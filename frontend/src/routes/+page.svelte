<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
</script>

<Hero
	name="Tomáš Michna"
	role="Data Engineer / R&D"
	imageUrl="https://media.licdn.com/dms/image/v2/D4D03AQGy1KMpva_UKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699305399980?e=1740614400&v=beta&t=C-FI87XRtT_6DxNE8HD8MeO0buWHhaBnW0pcgS_R79Q"
	buttonText="Get in Touch"
	buttonHref="#contact"
/>
<AboutMe />
<WorkExperience />
