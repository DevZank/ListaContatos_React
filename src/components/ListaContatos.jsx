import React, { useState } from "react";
import "./ListaContatos.css";

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);

  const [nome, setNome] = useState("");

  const [telefone, setTelefone] = useState("");

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);

      setNome("");

      setTelefone("");
    }
  };

  return (
    <main>
      <div className="CadastrarContainer">
        <h2>Lista de Contatos</h2>

        <div className="InputContainer">
          <div className="InputContent">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />
            <i class="ri-user-2-fill"></i>
          </div>

          <div className="InputContent">
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone"
            />
            <i class="ri-phone-fill"></i>
          </div>

          <button onClick={adicionarContato}>Adicionar Contato</button>
        </div>
      </div>

      <div className="Contatos">
        <ul>
          <i id="IconContatos" class="ri-contacts-book-fill"></i>
          {contatos.map((contato, index) => (
            <li key={index}>
              <i class="ri-user-2-fill"></i> <strong>{contato.nome}:</strong>{" "}
              <i class="ri-phone-fill"></i>
              {contato.telefone}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ListaDeContatos;
