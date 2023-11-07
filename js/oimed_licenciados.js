
import formTemplate from '../templates/form_cadastro_licenciado.js';

const urlRoute = 'http://localhost:3333';
//const urlRoute = 'https://apioimed.z4you.com.br';

function cardLicenciado(licenciado) {
    const cardTemplate = `
        <!-- Todo Info Box -->
        <div class="todo-info-box">
            <div class="d-flex  align-items-center flex-wrap">
                <div class="left-box d-flex justify-content-between align-items-center flex-wrap">
                    <!-- Check Box -->
                    <div class="check-box">
                        <input type="checkbox" name="remember-password" id="type-1"> 
                        <label for="type-1"></label>
                    </div>

                </div>
                <ul id="dados-licenciado" class="w-25">
                    <li>
                    <span class="subtitle">ID:</span>
                    <span>${licenciado.id}</span>
                    </li>
                    <li>
                    <span class="subtitle">Nome:</span>
                    <span>${licenciado.nome}</span>
                    </li>
                    <li>
                    <span class="subtitle">CPF:</span>
                    <span>${licenciado.cpf}</span>
                    </li>
                    <li>
                    <span class="subtitle">Telefone:</span>
                    <span>${licenciado.telefone}</span>
                    </li>

                </ul>
                <ul id="dados-licenciado" class="w-25">
                    <li>
                    <span class="subtitle">Email:</span>
                    <span>${licenciado.email}</span>
                    </li>
                    <li>
                    <span class="subtitle">Pass:</span>
                    <span>${licenciado.password}</span>
                    </li>
                    <li>
                    <span class="subtitle">T.Vendas:</span>
                    <span>${licenciado.vendas}</span>
                    </li>
                    <li>
                    <span class="subtitle">Status:</span>
                    <span>${licenciado.status}</span>
                    </li>
                </ul>
                <div class="right-box d-flex justify-content-between align-items-center flex-wrap w-25">                    
                    <!-- Options List -->
                    <div class="options-list clearfix">
                        <span class="more_dropdown flaticon-more">
                            <div class="dropdown-content">
                                <span class="btn-action" id="${licenciado.id}" ><i class='flaticon-share'></i>Compartilhar</span>
                                <span class="btn-action" id="${licenciado.id}" ><i class="flaticon-down-arrow-1"></i>Ativar</span>
                                <span class="btn-action" id="${licenciado.id}" onclick="apagar_licenciado(event)"><i class='flaticon-cancel'></i>Apagar</span>
                                <span class="btn-action" id="${licenciado.id}" ><i class="flaticon-edit-2"></i>Dependentes</span>
                            </div>							
                        </span>
                    </div>
                    <!-- End Options List -->
                    
                </div>
            </div>
        </div>
    `;

    return cardTemplate;

};


function buscarDado() {
    fetch(`${urlRoute}/franqueado/list`, {
        headers: {
            "Content-Type": "application/json",
            //"Authorization": `Bearer ${Cookies.get('token')}`
        }
    })
        .then((x) => x.json())
        .then((res) => {
            res.map((licenciado, index) => {
                //console.log(licenciado)
                const innerColumn = document.querySelectorAll('.inner-column')[1];
                innerColumn.insertAdjacentHTML('beforeend', cardLicenciado(licenciado));

                if (res.length, index + 1) {
                    //mostrar()
                }

            })

        });
};

buscarDado();


/* const innerColumn = document.querySelectorAll('.inner-column')[1];
innerColumn.insertAdjacentHTML('beforeend', cardLicenciado(2));
 */

function mostrar() {
    const btnDelete = document.querySelectorAll('.btn-action')
    btnDelete.forEach((btn) => {

        btn.addEventListener('click', (event) => {

            console.log(event.currentTarget);

        });
    });

};

window.criarLicenciado = function (event) {
    event.preventDefault();

    const body = formTemplate;

    Swal.fire({
        html: body,
        height: '200px',
        width: '50%',
        showCancelButton: true,
        confirmButtonText: 'Concluir',
        cancelButtonText: "Cancelar",
        didOpen: function () {
            document.querySelector('.header-upper').style.visibility = "hidden";
        },
        didClose: function () {
            document.querySelector('.header-upper').style.visibility = "visible";
        }
    })


};

window.apagar_licenciado = function (event) {
    let rowId = event.target.id;

    console.log(event.target);

    Swal.fire({
        html: `<p>Deseja deletar?</p>`,
        showCancelButton: true,
        confirmButtonText: 'Apagar',
        cancelButtonText: "Cancelar"
    })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`${urlRoute}/franqueado/${rowId}`, { method: "DELETE" })
                    .then((x) => x.json())
                    .then((res) => {
                        document.querySelectorAll('.inner-column')[1].innerHTML = '';
                        buscarDado();
                        Swal.fire({
                            title: "<strong>Deletado</strong>",
                            icon: 'success'
                        })
                    });
            };
        })
};





