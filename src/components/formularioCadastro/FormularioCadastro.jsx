import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }}>
            <TextField value={nome} onChange={(event) => {
                setNome(event.target.value);
            }} id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField value={sobrenome} onChange={(event) => {
                setSobrenome(event.target.value);
            }} id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField value={cpf} onChange={(event) => {
                setCpf(event.target.value);
            }} id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {
                    const eValido = validarCpf(event.target.value);
                    setErros({cpf:eValido});
                }}
            />

            <FormControlLabel value={promocoes} onChange={(event) => {
                setPromocoes(event.target.checked);
            }} label="Promoções" control={<Switch name="promocoes" color="primary" defaultChecked />} />

            <FormControlLabel value={novidades} onChange={(event) => {
                setNovidades(event.target.checked);
            }} label="Novidades" control={<Switch name="novidades" color="primary" defaultChecked />} />

            <Button color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;