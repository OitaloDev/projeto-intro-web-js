const estudantes = [
  {
    estudante: "Chris Evans",
    curso: "JavaScript",
    turma: "Hipátia",
    nParcelas: "9x",
    parcelas: 100,
    desconto: false,
    valor: "R$900",
  },
  {
    estudante: "Halle Berry",
    curso: "APIsRest",
    turma: "Burnell",
    nParcelas: "4x",
    parcelas: 500,
    desconto: false,
    valor: "R$2000",
  },
  {
    estudante: "Lashana Lynch",
    curso: "HTML e CSS",
    turma: "Zhenyi",
    nParcelas: "1x",
    parcelas: 500,
    desconto: false,
    valor: "R$500",
  },
];
const cursos = [
  {
    curso: "HTML e CSS",
    descrição: "HTML: esqueleto do site, CSS personalização.",
    duração: "1 mês",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descrição: "Parte interativa do site ( Vida )",
    duração: "6 meses",
    valor: 900,
  },
  {
    curso: "APIs REST",
    descrição: "Integração de APIs REST",
    duração: "2 meses",
    valor: 900,
  },
];
const turmas = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "Iniciou em 30/11/2022",
    termino: "30/01/2023",
    numeroAluno: 150,
    periodo: "Noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroAluno: 200,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroAluno: 180,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroAluno: 80,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numeroAluno: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIs Rest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroAluno: 100,
    periodo: "Integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIs Rest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroAluno: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIs Rest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroAluno: 90,
    periodo: "Integral",
    concluida: false,
  },
];

const carrinhoCursos = [];
let htmlCode = "";

//Const HTML
const btns = document.getElementsByClassName("btn");
const buscaTurmaInput = document.getElementById("buscarTurma");
const galeria = document.getElementById("galeria");
const msgMatricula = document.getElementById("msgMatricula");
const msgMatriculaBody = document.getElementById("msgMatriculaBody");
const form = document.getElementById("form");
const buscaAlunoInput = document.getElementById("buscarAluno");
const relatorioMsg = document.getElementById("relatAluno");
const listaCurso = document.getElementById("lista_cursos");
const listaCursoBody = document.getElementById("lista_cursos_body");
const buscarCursoInput = document.getElementById("buscarCurso");
const mostrarValor = document.getElementById("showValue");

const encontrarTurmas = (nomeTurma) => {
  //const nomeTurma = document.getElementById("buscarTurma");

  if (nomeTurma.length == 0) {
    return turmas;
  }

  const query = turmas.filter((elemento) =>
    elemento.turma.toLowerCase().includes(nomeTurma.toLowerCase())
  );

  if (query.length > 0) {
    return query;
  }
};

const showCards = (nome) => {
  const buscaTurma = encontrarTurmas(nome);
  buscaTurmaInput.value = "";

  if (buscaTurma === undefined) {
    alert("Turma não encontrada!");
    return;
  }

  htmlCode = "";

  for (let value of buscaTurma) {
    htmlCode += `
    <div class="card">
      <h4 class="title">${value.turma}</h4>
      <div class="body">
        <p><span>Curso:</span> ${value.curso} </p>
        <p><span>Início:</span> ${value.inicio} </p>
        <p><span>Término:</span> ${value.termino} </p>
        <p><span>Número de Alunos:</span> ${value.numeroAluno} </p>
        <p><span>Período:</span> ${value.periodo} </p>
        <p><span>Concluído:</span> ${value.concluida ? "Sim" : "Não"} </p>
      </div>
    </div>
  `;
  }

  galeria.innerHTML = htmlCode;
};

for (let value of turmas) {
  galeria.innerHTML += `
  <div class="card">
    <h4 class="title">${value.turma}</h4>
    <div class="body">
      <p><span>Curso:</span> ${value.curso} </p>
      <p><span>Início:</span> ${value.inicio} </p>
      <p><span>Término:</span> ${value.termino} </p>
      <p><span>Número de Alunos:</span> ${value.numeroAluno} </p>
      <p><span>Período:</span> ${value.periodo} </p>
      <p><span>Concluído:</span> ${value.concluida ? "Sim" : "Não"} </p>
    </div>
  </div>
`;
}

const encontrarCursos = (nomeCursos) => {
  return cursos.find((e) => e.curso.toLowerCase() === nomeCursos.toLowerCase());
};

const encontrarEstudante = (nomeEstudante) => {
  const query = estudantes.filter(
    (e) => e.estudante.toLowerCase() === nomeEstudante.toLowerCase()
  );

  if (query.length > 0) return query;
};

const matricular = (nome, curso, turma, numParcela) => {
  const cursoEncontrado = encontrarCursos(curso);
  const turmaEncontrado = encontrarTurmas(turma);
  msgMatricula.style.visibility = "hidden";

  if (cursoEncontrado === undefined) {
    alert("Curso não encontrado!");
    return;
  }

  if (turmaEncontrado === undefined) {
    alert("Turma não encontrada!");
    return;
  }

  if (numParcela === "0" ){
    alert("Informe a quantidade de parcelas !")
    return
  }

  msgMatricula.style.visibility = "visible";
  const valorDoCurso = cursoEncontrado.valor;
  let valorTotal = 0;


  if (numParcela > 0 && numParcela <= 2) {
    valorTotal = valorDoCurso - valorDoCurso * 0.2;
  } else {
    valorTotal = valorDoCurso;
  }

  const novoAluno = {
    estudante: nome,
    turma: turma,
    curso: curso,
    valor: valorDoCurso,
    nParcelas: numParcela,
    desconto: numParcela <= 2 ? true : false,
    parcelas: valorTotal / numParcela,
  };


  estudantes.push(novoAluno);

  msgMatriculaBody.innerHTML = `
    <p><b>Nome:</b> ${nome}</p>
    <p><b>Curso:</b> ${curso}</p>
    <p><b>Turma:</b> ${turma}</p>
`;

  form.reset();
};

const parcelarCurso = (carrinhoCursos, parcela) => {
  let valorTotal = 0;
  let desconto = 0;
  let descontoVivo = 0.2;

  switch (carrinhoCursos.length) {
    case 3:
      desconto = 0.15;
      break;
    case 2:
      desconto = 0.1;
      break;

    default:
      desconto = 0;
      break;
  }

  if (parcela === "0") {
    alert("Informe a quantidade de parcelas !");
    return;
  }

  for (let iten of carrinhoCursos) {
    valorTotal = valorTotal + iten.valor;
  }

  valorTotal -= valorTotal * desconto;

  if (parcela <= 2) {
    valorTotal -= valorTotal * descontoVivo;
    console.log(valorTotal);
    mostrarValor.innerHTML = `O valor do pagamento é de R$ ${valorTotal}. Em ${parcela} X de ${
      valorTotal / parcela
    } reais. Foi concedido desconto de 20%`;
  } else {
    mostrarValor.innerHTML = `O valor do pagamento é de R$ ${valorTotal}. Em ${parcela} X de ${(
      valorTotal / parcela
    ).toFixed(2)} reais.`;
  }
};

//Mostra a lista dos cursos disponíveis
const mostrarCursos = () => {
  listaCurso.style.display = "flex";
  listaCursoBody.innerHTML = "";

  for (let value of cursos) {
    listaCursoBody.innerHTML += `
      <div class="top">
        <p>Curso</p>
        <p>Duração</p>
        <p>Valor</p>
        <p>Opção</p>
      </div>
      <div class="body">
        <p>${value.curso}</p>
        <p>${value.duração} </p>
        <p>R$ ${value.valor}</p>
        <p><button onclick="adicionarCurso('${value.curso}')">Adicionar</button></p>
      </div>
    `;
  }
};

//Esconde a tela do Curso
const esconderCursos = () => {
  listaCurso.style.display = "none";
};

const adicionarCurso = (curso) => {
  const cursoEncontrado = encontrarCursos(curso);

  if (cursoEncontrado === undefined) {
    alert("Curso não encontrado!");
    return;
  }

  for (let item of carrinhoCursos) {
    if (item.curso === curso) {
      alert("Curso já adicionado!");
      return;
    }
  }

  carrinhoCursos.push(cursoEncontrado);

  buscarCursoInput.innerHTML += `
    <span class="show_curso">
      <p>${curso === "HTML e CSS" ? "HTML" : curso}</p>
      <img src="./Galeria/cancel.png" alt="Cancel" onclick="removeCarrinhoCurso(this.parentElement, this.previousElementSibling.innerHTML)">
    </span>
  `;

  buscarCursoInput.style.borderColor = "black";
};

//Remove o curso do carrinho e da página
const removeCarrinhoCurso = (element, curso) => {
  if (curso === "HTML") curso = "HTML e CSS";
  const cursoEncontrado = encontrarCursos(curso);

  carrinhoCursos.pop(cursoEncontrado);
  element.remove();
};

//Mostra o relatorio do estudante buscando pelo nome certo do Aluno
const relatorio = (nome) => {
  const estudanteEncontrado = encontrarEstudante(nome);
  buscaAlunoInput.value = "";

  if (estudanteEncontrado === undefined) {
    relatorioMsg.innerHTML = "";
    alert("Aluno não encontrado!");
    return;
  }

  for (let value of estudanteEncontrado) {
    relatorioMsg.innerHTML = `
      <p><b>Aluno:</b> ${value.estudante} </p>
      <p><b>Turma:</b> ${value.turma} </p>
      <p><b>Curso:</b> ${value.curso} </p>
      <p><b>Valor Total:</b> R$ ${value.valor} </p>
      <p><b>Valor Parcela:</b> R$ ${value.parcelas} </p>
      <p><b>N° Parcelas:</b> ${value.nParcelas} </p>
    `;
  }
};

//Troca pagina da Área de ADM
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");

    document.getElementById(
      current[0].innerHTML.toLowerCase().replace(" ", "")
    ).style.display = "none";
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
    document.getElementById(
      this.innerHTML.toLowerCase().replace(" ", "")
    ).style.display = "block";
  });
}
