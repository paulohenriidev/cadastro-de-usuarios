import { useRef, useState } from "react";
import api from "../../services/api";
import {
  Title,
  Paragraph,
  TopIcon,
  ContainerInput,
  Input,
  Form,
  InputLabel,
  Container,
  VerUsers,
} from "./styles";

import Button from "../../components/Button";
import IconUser from "../../assets/iconuser.png";
import verUsers from "../../assets/verUsers.png";
import Background from "../../components/Background";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const closeToast = () => {
    setShowToast(false);
  };

  // Função para validação dos inputs
  const validateInputs = () => {
    const name = inputName.current.value.trim();
    const age = inputAge.current.value.trim();
    const email = inputEmail.current.value.trim();

    if (!name) {
      setToastMessage("Nome é obrigatório.");
      setShowToast(true);
      return false;
    }

    if (!age || isNaN(age) || age <= 0) {
      setToastMessage("Idade inválida. Por favor, insira um número válido.");
      setShowToast(true);
      return false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setToastMessage("Por favor, insira um e-mail válido.");
      setShowToast(true);
      return false;
    }

    return true;
  };

  async function registerNewUsers() {
    // Valida os inputs antes de prosseguir com o registro
    if (!validateInputs()) return;

    setToastMessage("Cadastrando usuário...");
    setShowToast(true);

    try {
      await api.post("/users", {
        name: inputName.current.value.trim(),
        age: parseInt(inputAge.current.value),
        email: inputEmail.current.value.trim(),
      });

      // Limpa campos
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";

      // Atualiza a mensagem sem precisar reesconder o toast
      setToastMessage("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      setToastMessage("Erro ao cadastrar o usuário! Tente novamente.");
    }
  }

  return (
    <Background>
      <TopIcon>
        <img src={IconUser} alt="icone de usuario" />
      </TopIcon>
      <Container>
        <Form>
          <Title>Seja bem vindo!</Title>
          <Paragraph>Crie seu usuário agora mesmo.</Paragraph>

          <ContainerInput>
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <Input type="text" placeholder=" " id="nome" ref={inputName} />
              <InputLabel htmlFor="nome">Nome</InputLabel>
            </div>

            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <Input type="number" placeholder=" " id="idade" ref={inputAge} />
              <InputLabel htmlFor="idade">Idade</InputLabel>
            </div>

            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <Input type="email" placeholder=" " id="email" ref={inputEmail} />
              <InputLabel htmlFor="email">E-mail</InputLabel>
            </div>
          </ContainerInput>

          <Button type="button" onClick={registerNewUsers} theme="primary">
            Cadastrar
          </Button>
        </Form>

        <VerUsers>
          <img className="verUsers" src={verUsers} alt="icone de usuario" />
          <Button
            type="button"
            onClick={() => navigate("/listagem-de-usuarios")}
          >
            Ver usuários
          </Button>
        </VerUsers>
      </Container>
      <Toast message={toastMessage} show={showToast} onClose={closeToast} />
    </Background>
  );
}
export default Home;