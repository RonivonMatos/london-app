<script>
    export let showModal = false, status=false;
</script>


{#if showModal}
    {#if status==200}
    <div class="modal">
        <p>Você está logado</p>
        <button on:click>Voltar</button>
    </div>
    {/if}
{/if}