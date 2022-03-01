<script>
	import Modal from "./components/Modal.svelte";

	let token = '', key = '', showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
		token = '';
		key = '';
	}

	$: login = async () => {
		await fetch(`https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=${token}&key=${key}`)
		.then(response => response.json())
  		.then(data => {
		console.log(data[0].status);
		console.log(key)
		console.log(token)
  		}).catch(error => {
    	console.log(error);
  		});
		toggleModal()
		console.log(showModal)
	}
</script>

<main>
	<Modal {showModal} on:click={toggleModal}/>
	<form on:submit|preventDefault={login()}>
		<!-- <label >Token</label> -->
		<input bind:value={token} type="token" placeholder="token"/>
		<!-- <label>Key</label> -->
		<input bind:value={key} type="password" placeholder="Access key"/>

		<button type="submit">Entrar</button>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>