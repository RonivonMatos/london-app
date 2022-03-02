<script>
    export let showModal = false, success = false, dictionary = {};
    import {linear} from 'svelte/easing'
    import { fade } from 'svelte/transition';
</script>

{#if showModal}
    <div class="modal-wrapper">
        {#if success}
        <div class="modal" transition:fade={{duration: 300, easing: linear}}>
            <img src="images/successful.svg" alt=""/>
            <p>{dictionary.successful}</p>
            <button on:click>{dictionary.logout}</button>
        </div>
        {:else}
        <div class="modal" transition:fade={{duration: 300, easing: linear}}>
            <img src="images/unsuccessful.svg" alt=""/>
            <p>{dictionary.unsuccessful}</p>
            <button on:click>{dictionary.back}</button>
        </div>
        {/if}
    </div>
{/if}


<style>
    .modal-wrapper{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 100;
    }

    .modal-wrapper .modal{
    position: absolute;
    width: 20rem;
    background: white;
    margin: auto;

    border-radius: 0.5rem;

    font-family: "Poppins", sans-serif;
    text-align: center;

    box-shadow: 0px 0px 15px rgba(100, 100, 100, 0.493);

    }
    .modal img{
        width: 10rem;
    }
</style>