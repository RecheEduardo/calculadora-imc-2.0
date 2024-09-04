import React, { useState } from 'react'

const InitialSetup = () => {

  const [altura , useAltura] = useState("")
  const [peso, usePeso] = useState("")
  const [finished, useFinished] = useState(false);

  const imc = peso / altura ** 2

  const cleanForm = () =>{
    usePeso("");
    useAltura("");
  }

  const handleFinish = (e) => {
    if (!peso || !altura || peso <= 0 || altura <= 0) {
      e.preventDefault();
      return
    }
    e.preventDefault()
    useFinished(true);
  }

  const handleBack = (e) => {
    e.preventDefault();
    useFinished(false);
  }

  let classificacaoIMC
  
  if (imc < 18.5) {
      classificacaoIMC = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacaoIMC = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacaoIMC = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacaoIMC = "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    classificacaoIMC = "Obesidade grau 2";
  } else if (imc >= 40) {
    classificacaoIMC = "Obesidade grau 3";
  } else {
    classificacaoIMC = "IMC inválido";
  }
  

  return (
    <>
      <div className= {finished? 'initial-setup hidden': 'initial-setup'}>
          <h1>Calculadora de IMC</h1>
          <form className='setup-form' onSubmit={handleFinish}>
            <div className="setup-infos">
              <label>
                <p><i class="fas fa-weight"></i> Peso em Kg</p>
                <input type="number" name="peso" id="userWeight" placeholder='Ex: 76.4' value={peso} onChange={(e) => usePeso(e.target.value)} autoFocus step={0.1}/>
              </label>
              <label>
                <p><i class="fa-solid fa-ruler"></i> Altura em metros</p>
                <input type="number" name="height" id="userHeight" placeholder='Ex: 1.74' value={altura} onChange={(e) => useAltura(e.target.value)} step={0.01}/>
              </label>
            </div>  
            <div className="buttons">
              <input type="button" value="Limpar" className='actions-btns' onClick={cleanForm}/>
              <input type="submit" value="Calcular" className='actions-btns'/>
            </div>
          </form>
      </div>
      <div className= {finished? 'setup-result': 'setup-result hidden'}>
        <h1>Seu IMC é <span>{imc.toFixed(1)}</span></h1>
        <p>Você está classificado como <strong>{classificacaoIMC}</strong></p>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abaixo de 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18,6 e 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34,9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>Entre 35 e 39,9</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr>
              <td>Acima de 40</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <form onSubmit={handleBack}>
            <input type="submit" value="Voltar" className='actions-btns'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default InitialSetup
