const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// 1 - Selecionamos um elemento no qual queremos adcionar algo
//const divToAppend = document.getElementById('box_3')

// 2 - Criamos o elemento no caso um <p></p>
//const paragraph = document.createElement('p')
// 3 - Inserimos as alteracoes que queremos nele
// no exemplo estamos colocando apenas um texto
//paragraph.innerText = 'Eu fui criado dinamicamente'

// 4 - Colocamos ele na tela linkando com o passo 1.
// Obs. O passo 1 pode vir depois do 2 e 3.
//divToAppend.appendChild(paragraph)
const list = document.querySelector('ul')

function showResults(result){
    const itemList = document.createElement('li')
    const itemText= document.createElement ('p')
    
    itemText.innerText = result
    
    
    itemList.appendChild(itemText)
    list.appendChild(itemList)
    
    
    
}




function kata1() {
    let result = []
    for(let i = 0 ; i <=25 ; i++){
        result.push(i)
    }
    
    showResults(result)
    return result
}

   

function kata2() {
    let result = []
    for(let i = 25 ; i >=0 ; i--){
        result.push(i)
    }
    showResults(result)
    return result
}



function kata3() {
    let result = []
    for(let i = -1 ; i >=-25 ; i--){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata4() {
    let result = []
    for(let i = -25 ; i <= -1 ; i++){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata5() {
    let result = []
    for(let i = 25 ; i >= -25 ; i-=2){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata6() {
    let result = []
    for(let i = 3 ; i <=100 ; i+=3){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata7() {
    let result = []
    for(let i = 7 ; i <=100 ; i+=7){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata8() {
    let result = []
    for(let i = 100 ; i >=3 ; i--){
        if(i % 3 === 0 || i % 7 === 0){
            result.push(i)
        }
    }
    showResults(result)
    return result
}


function kata9() {
    let result = []
    for(let i = 5 ; i <=100 ; i+=10){
        result.push(i)
    }
    showResults(result)
    return result
}


function kata10() {
    return sampleArray
}

function kata11() {
    let result = []
    let length = sampleArray.length
    for(let i = 0 ; i <length ; i++){
        if(sampleArray[i] % 2 === 0)
        result.push(sampleArray[i])
    }
    showResults(result)
    return result
}
function kata12() {
    let result = []
    let length = sampleArray.length
    for(let i = 0 ; i <length ; i++){
        if(sampleArray[i] % 2 ==! 0)
        result.push(sampleArray[i])
    }
    showResults(result)
    return result
}

function kata13() {
    let result = []
    let length = sampleArray.length
    for(let i = 0 ; i <length ; i++){
        if(sampleArray[i] % 8 === 0)
        result.push(sampleArray[i])
    }
    showResults(result)
    return result
}

function kata14() {
    let result = []
    let length = sampleArray.length
    for(let i = 0 ; i <length ; i++){
        
        
        result.push(sampleArray[i] * sampleArray[i])
    }
    showResults(result)
    return result
}

function kata15() {
    let numbers = []
    
    
    for(let i = 1 ; i <=20 ; i++){
        
        numbers.push(i)
        
    }
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        
        sum += numbers[i];
    }
    showResults(sum)
    return sum
    
}

function kata16() {
    let sum = 0;
    
    for (let i = 0; i < sampleArray.length; i++) {
        
        sum += sampleArray[i];
    }
    showResults(sum)
    return sum
    
}

function kata17() {
    let result = sampleArray[0]
    let length = sampleArray.length
    for(let i = 0 ; i <length ; i++){
        if(result < sampleArray[i]){
            result = sampleArray[i]
        }
    }
    showResults(result)
    return result
}


function kata18() {
    let result = sampleArray[0]
    let length = sampleArray.length
    for(let i = 0 ; i < length ; i++){
        if(sampleArray[i] < result){
            result = sampleArray[i]
        }
    }
    showResults(result)
    return result
}


kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}



