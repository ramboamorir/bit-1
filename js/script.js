document.addEventListener("DOMContentLoaded",()=>{

    const buttonPractice =document.getElementById("information-practice")
    buttonPractice.addEventListener('click', ()=>{
        buttonPractice.disabled = true; // Función disabled bloquea o inhabilita
        const informationAditional = document.getElementById('information-aditional')
        informationAditional.innerHTML += `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="css/styles.css"></link>
            <h2 class="subtitles">Practicas para la buena implementación de codigo</h2>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Tipos de practicas</th>
                        <th>Maneras de implementar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <li>Legibilidad y claridad del código</li>
                            <li>Organización del código</li>
                            <li>Reutilización y modularidad</li>
                            <li>Mantenimiento y escalabilidad</li>
                            <li>Manejo de errores</li>
                        </td>
                        <td>
                            <li>Usar nombres claros y descriptivos</li>
                            <li>Evitar abreviaciones confusas</li>
                            <li>Mantener funciones cortas</li>
                            <li>Separar HTML, CSS y JS</li>
                            <li>Usar archivos por responsabilidad</li>
                            <li>Orden lógico en carpetas</li>
                            <li>No repitas código</li>
                            <li>Validar datos</li>
                            <li>Usar try...catch</li>
                            <li>Mensajes de error claros</li>
                        </td>
                    </tr>
                </tbody>
            </table>
        `; //Añadir al terminar el codigo `` tanto al inicio como al final
    })

    const buttonExercise = document.getElementById('information-exercise')
    const informationAditional = document.getElementById('information-aditional')
    let counterButton=0;

    buttonExercise.addEventListener('click',() => {
        if (counterButton === 0) {
            let first_number 
            let second_number
            let answer_number

            first_number = Math.floor(Math.random()*100)+1;
            second_number = Math.floor(Math.random()*100)+1
            answer_number = first_number + second_number;

            informationAditional.innerHTML +=`
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
                <link rel="stylesheet" href="css/styles.css"></link>
                <h2 class="subtitles">Ejercicio practico usando JS</h2>
                <p>El siguiente ejercicios sera un ejercicio matematico basico</p>
                <p>´La siguiente operación es entre: "${first_number}", + "${second_number}", = "${answer_number}"</p>´
            `;//Añadir al terminar el codigo `` tanto al inicio como al final
            counterButton++
        }else{
                cleanerNumber
                first_number = Math.floor(Math.random()*100)+1;
                second_number = Math.floor(Math.random()*100)+1
                answer_number = first_number + second_number;
                const informationAditional = document.getElementById('information-aditional')
                informationAditional.innerHTML +=`
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
                    <link rel="stylesheet" href="css/styles.css"></link>
                    <h2 class="subtitles">Ejercicio practico usando JS</h2>
                    <p>El siguiente ejercicios sera un ejercicio matematico basico</p>
                    <p>´La siguiente operación es entre: "${first_number}", + "${second_number}", = "${answer_number}"</p>´
                `;
                buttonExercise.disabled = true;
            }
        })

        function cleanerNumber() {
        if(clear ===false){
            first_number = ""
            second_number = ""
            answer_number = ""
        }
    }

    const buttonSound = document.getElementById('information-sound')
    buttonSound.addEventListener('click',()=>{
        const informationAditional = document.getElementById('information-aditional')
        informationAditional.innerHTML +=`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="css/styles.css"></link>
            <h2 class="subtitles">Incorporando un video</h2>
            <video src="video.mp4"></video>
            <iframe width="951" height="535" src="https://www.youtube.com/embed/tDdh9WS6E8g"></iframe>
        `;
        buttonSound.disabled = true;
    })

    //Sistema de recomendaciones para Contactos
    const nameUser = document.getElementById('name-user');
    const cityUser = document.getElementById('city-user');
    const ageUser = document.getElementById('age-user');
    const buttonSubmit = document.getElementById('submit');


        buttonSubmit.addEventListener('click', ()=>{
            alert(`Muchas gracias por tus aportes, "${nameUser}", de la ciudad, "${cityUser}", para identificar en adaptabilidad para aquellas personas con intervalo de edad, "${ageUser}"`)
            clearForms;
        })

    function clearForms(){
        nameUser.textContent = "";
        cityUser.textContent = "";
        ageUser.textContent = "";
    }
})

console.log('Estoy listo!');