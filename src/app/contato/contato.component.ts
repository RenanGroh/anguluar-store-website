import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})

export class ContatoComponent implements OnInit{

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["",[
      Validators.minLength(5),
      Validators.required
    ]],
    telefone: ["",[
      Validators.min(11),
      Validators.required
    ]],
    email: ["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["",[
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      
  }

  enviarFormulario() {
    alert("Formulario enviado")
    this.formContato.reset();
  }

}
