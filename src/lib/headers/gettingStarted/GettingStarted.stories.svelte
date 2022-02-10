<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import GettingStarted from './GettingStarted.svelte';
</script>

<Meta
	title="Getting Started/Header"
	component={Header}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<GettingStarted
		{...args}
		on:login={args.onLogin}
		on:logout={args.onLogout}
		on:createAccount={args.onCreateAccount}
	/>
</Template>

<Story
	name="LoggedIn"
	args={{
		user: {}
	}}
/>

<Story name="LoggedOut" args={{}} />
