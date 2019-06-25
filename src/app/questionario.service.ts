import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {
  pessoas = [];
  cidades = ['Palmas', 'Paraíso', 'Porto Nacional'];

  constructor() { }
  salvar(nome: string, sexo: string, idade: number, cidade: string) {
    const pessoa = {
      nome,
      idade,
      cidade,
    };
    this.pessoas.push(pessoa);
  }
  lista() {
    return this.pessoas;
  }
  listaCidades() {
    return this.cidades;
  }
}
