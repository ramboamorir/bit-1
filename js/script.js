document.addEventListener("DOMContentLoaded",()=>{
    const buttonPractice =document.getElementById('information-practice')
    buttonPractice.onclick = ()=>{
        const informationAditional = document.getElementById('information-aditional')
    }

    const buttonExercise = document.getElementById('information-exercise')
    buttonExercise.onclick = ()=>{
        alert('Boton presionado en información Ejercicio');
    }
    
    const buttonSound = document.getElementById('information-sound')
    buttonSound.onclick = ()=>{
        alert('El Boton de Musica fue presionado')
    }
})
console.log('Estoy listo!');