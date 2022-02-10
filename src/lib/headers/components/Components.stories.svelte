<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Components from './Components.svelte';
</script>

<Meta
	title="Components/Page"
	component={Page}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<Components
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
