class Agenda {
    constructor() {
      this.contato = [];
    }
    
    addContato(nome, sobrenome, nascimento, tipo, ddd, num) {
      this.contato.push(new Contato(new Pessoa(nome, sobrenome, nascimento), new Numero(tipo, ddd, num)));
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