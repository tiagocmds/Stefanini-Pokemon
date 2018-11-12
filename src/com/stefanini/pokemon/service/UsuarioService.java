package com.stefanini.pokemon.service;

import java.util.Set;

import javax.inject.Inject;

import com.stefanini.pokemon.entities.TipoPessoa;
import com.stefanini.pokemon.entities.Usuario;


public class UsuarioService extends ServiceBase {

	private BaseDados baseDados;
	
	@Inject
	public UsuarioService(BaseDados baseDados) {
		this.baseDados = baseDados;
	}
	
	public void salvar(Usuario user) {
		user.setTipoPessoa(TipoPessoa.PESSOA_FISICA);
		baseDados.salvar(user);
	}
	
	public Usuario obter(Long id) {
		return baseDados.obter(id);
	}

	public void alterar(Usuario user) {
		baseDados.alterar(user);
	}
	
	public void excluir(Long id) {
		baseDados.excluir(id);
	}

	public Set<Usuario> listar() {
		return baseDados.listar();
	}
	
}
