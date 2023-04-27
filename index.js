const formulario = document.getElementById('formulario')

if (formulario) {
    formulario.addEventListener('submit',async(e)=>{
        e.preventDefault();
        let pergunta = document.getElementById('campo-pergunta').value;

        document.getElementById('pergunta').innerHTML = pergunta
        await fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer "+'KEY'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": pergunta}],
                
                max_tokens: 2048,
                temperature:0.5
            })
        }).then((resposta)=>resposta.json()).then((dados)=>{
           document.getElementById('resposta').innerHTML = (dados.choices[0].message.content)
        }).catch((erro)=>console.log(erro))
    })
}