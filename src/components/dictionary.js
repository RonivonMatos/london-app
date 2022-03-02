let language = window.navigator.userLanguage || window.navigator.language;
    export function makeDictionary(){
        if(language == "pt-BR"){
            return {
               userPlaceholder:"Usuário",
               passPlaceholder:"Senha",
               login:"Entrar",
               logout:"Sair",
               back:"Voltar",
               unsuccessful:"Por favor, tente novamente",
               successful:"Bem vindo! Você está logado."
           }
       } else{
           return {
               userPlaceholder:"User",
               passPlaceholder:"Password",
               login:"Sign In",
               logout:"Sign Out",
               back:"Return",
               unsuccessful:"Please, try again",
               successful:`Welcome! you are now logged in.`
           }
       }
}