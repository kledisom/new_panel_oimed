function formTemplate() {
    return `
    <h2>Formulário de Cadastro</h2>
    <div class="formulario">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="cpf">CPF:</label>
    <input type="text" id="cpf" name="cpf" required>

    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="nu_banco">Número do Banco:</label>
    <input type="text" id="nu_banco" name="nu_banco" required>

    <label for="chave_pix">Chave PIX:</label>
    <input type="text" id="chave_pix" name="chave_pix" required>

    <label for="site_url">Site URL:</label>
    <input type="url" id="site_url" name="site_url" required>

    <label for="products">Produtos:</label>
    <textarea id="products" name="products" required></textarea>
</div>
    `;
};

export default formTemplate();