class Agenda {
  constructor() {
    this.contato = [];
  }
    
  addContato(nome, sobrenome, nascimento, tipo, ddd, num) {
    this.contato.push(new Contato(new Pessoa(nome, sobrenome, nascimento), new Numero(tipo, ddd, num)));
    console.log("Contato adicionado");
  }

  criarContato() {
    var nome = window.prompt("Informe o nome");
    var sobrenome = window.prompt("Informe o sobrenome");
    var nascimento = window.prompt("Informe a data de nascimento");
    var tipo = window.prompt("Informe o tipo do telefone");
    var ddd = window.prompt("Informe o DDD");
    var numero = window.prompt("Informe o número");
    console.log(this);
    this.addContato(nome, sobrenome, nascimento, tipo, ddd, numero);
  }
}

class Contato {
    constructor(pessoa, numero) {
      this.pessoa = pessoa;
      this.numero = []
      this.numero.push(numero);
      this.end = [];
      this.email = [];
    }
    
    adicionarNovo() {
      var x = window.prompt("Inserir novo Número(1), Endereço(2), Email(3):");
      if(x == 1) {
        var tipo = prompt("Tipo de telefone");
        var ddd = prompt("DDD");
        var num = prompt("Numero");
        this.addNumero(tipo, ddd, num);
      } else if(x == 2) {
        var tipo = prompt("Tipo do Endereço");
        var logradouro = prompt("Logradouro");
        var num = prompt("Numero");
        var cep = prompt("CEP");
        var complemento = prompt("Complemento");
        this.addEndereco(tipo, logradouro, num, cep, complemento);
      } else if(x == 3) {
        var tipo = prompt("Tipo de Email");
        var email = prompt("Email");
        this.addEmail(tipo, email);
      } else {
        alert("Entre com os número entre 1 e 3");
        this.adicionarNovo();
      }
    }
    
    addNumero(tipo, ddd, num) {
      this.numero.push(new Numero(tipo, ddd, num));
    }
    
    addEndereco(tipo, logradouro, num, cep, complemento) {
      this.end.push(new Endereco(tipo, logradouro, num, cep, complemento));
    }
    
    addEmail(tipo, email) {
      this.email.push(new Email(tipo, email));
    }
  }

class Pessoa {
    constructor(nome, sobrenome, nascimento) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.nascimento = nascimento;
    }
  }

class Numero {
    constructor(tipo, ddd, num) {
      this.tipo = tipo;
      this.ddd = ddd;
      this.num = num;
    }
  }

class Endereco {
    constructor(tipo, logradouro, num, cep, complemento) {
      this.tipo = tipo;
      this.logradouro = logradouro;
      this.num = num;
      this.cep = cep;
      this.complemento = complemento;
    }
  }

class Email {
  constructor(tipo, email) {
    this.tipo = tipo;
    this.email = email;
  }
}

var agenda = new Agenda();