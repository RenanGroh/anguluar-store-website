import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto } from '../../produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit{

  produto: IProduto | undefined;

  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {
      const routParams = this.route.snapshot.paramMap;
      const produtoId = Number(routParams.get("id"));
      this.produto = this.produtosService.getOne(produtoId);
  }

}
