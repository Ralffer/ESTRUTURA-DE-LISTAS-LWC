import { LightningElement } from "lwc";
export default class App extends LightningElement {

/*
Objetos JavaScript

{key: value, key1: value, ..., key3:value}

nameObject = {
  key1: value,
    key: value,
      key12 value,
}
 */
//object JS
pessoa = {
  nome: ' Renan Mussato',
  cpf: ' 001.454.652-62',
  idade: 22
};

account = {
name: ' Brasil',
type: ' hot',
rating: ' Prospect',
website: ' wwww.modelo.org'
};
//Lista de objetos
//> lista de objetos armazenados
//Lista = [
//  {};
//  {};
//  {};
//   ];
// Lista que contem objetos com chave e valor
pokemon= [
{cod: 1, nome: 'Pikatchu' , tipo: 'raio', nivel: '+9000'},
{cod: 2, nome: 'Bombassauro' , tipo: 'agua' , nivel: '+7000'},
{cod: 3, nome: 'Charizard', tipo: 'fogo' , nivel: '+6500'},
{cod: 4, nome: 'Mamako', tipo: 'fogo' , nivel: '+8000'},
{cod: 5, nome: 'Bilico', tipo: 'neve' , nivel: '-100'},
{cod: 6, nome: 'Maricota', tipo: 'fogo' , nivel: '+8500'},

];

frutas= [
{cod: 1, nome: 'Mamão' , tipo: 'papaya', nivel: 'Delicius'},
{cod: 2, nome: 'Abacaxi' , tipo: 'Marataizes' , nivel: 'Doce'},
{cod: 3, nome: 'Goiaba', tipo: 'Araçauna' , nivel: 'Branca'},
{cod: 4, nome: 'Uva', tipo: 'Verde' , nivel: 'S/ Semente'},

];


}