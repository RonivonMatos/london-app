<script>
	import Modal from "./components/Modal.svelte";
	import {makeDictionary, sha1} from "./components/functions.js";
	
	let user = '';
	let dictionary = makeDictionary(user);
	let password = '', token, key, showModal = false, success = false, status= 404;
	const toggleModal = () => {
		showModal = !showModal;
		user = '';
		password = '';
	}

	$: login = async () => {
		token = sha1(user);
		key = sha1(password);
		await fetch(`https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=${token}&key=${key}`)
		.then(response => response.json())
  		.then(data => {
		status = data[0].status;
		toggleModal()
		if(status==200){
			success = true
		}
		else{
			success = false
		}
  		}).catch(error => {
    	console.log(error);
  		});
	}
	
</script>

	<Modal {showModal} {success} on:click={toggleModal} {dictionary}/>

<main style="background: url('images/london_bw.jpg') no-repeat center; background-size: cover;">
	<div class="content">
		<h1>Lond<span>on</span></h1>
		<form on:submit|preventDefault={login()}>
			<!-- <label >Token</label> -->
			<input bind:value={user} type="token" placeholder={dictionary.userPlaceholder} required/>
			<!-- <label>Key</label> -->
			<input bind:value={password} type="password" placeholder={dictionary.passPlaceholder} required/>
			<button type="submit">{dictionary.login}</button>
		</form>
	</div>
</main>

<style>

 	h1 {
		text-shadow: 2px 2px 1px rgba(255, 252, 252, 0.651);
		font-size: 4em;
		text-align: center;
		font-weight: 400;
		margin-bottom: 0;
		color: #252525;
	}

	h1 span{
		color: rgb(250, 104, 0);
		filter: brightness(1.4);
	}

	main{
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.content, form{
		display: flex;
		flex-direction: column;
	}

</style>