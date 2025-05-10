import Button from "../../components/Button";
import Background from "../../components/Background/";
import {
  Title,
  UsersContainer,
  IconUsers,
  CardUsers,
  TrashIcon,
  Avatar,
  ContainerUsers,
} from "./styles";
import ListIcon from "../../assets/group-fill.png";
import TrashIcons from "../../assets/trash.png";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState, useCallback } from "react";
import Toast from "../../components/Toast"; // Certifique-se de que você está importando o componente Toast

const ListUsers = () => {
  const navigateHome = useNavigate();
  const [users, setUsers] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  // Função para deletar um usuário
  const deleteUsers = useCallback(async (id) => {
    try {
      await api.delete(`users/${id}`);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));

      // Notificação de sucesso
      setToastMessage("Usuário deletado.");
      setShowToast(true);
    } catch (error) {
      console.error(error);
      setToastMessage("Erro ao deletar o usuário! Tente novamente.");
      setShowToast(true);
    }
  }, []);

  return (
    <Background>
      <UsersContainer>
        <IconUsers>
          <img src={ListIcon} alt="ícone de lista" />
        </IconUsers>
        <Title>Listagem de Usuários</Title>
        
        <ContainerUsers>
          {users.map(user => (
            <CardUsers key={user.id}>
              <Avatar
                src={`https://avatar.iran.liara.run/public?username=${user.id}`}
              />
              <div>
                <h4>
                  <strong>Nome: </strong> {user.name}
                </h4>
                <p>
                  <strong>Idade: </strong> {user.age}
                </p>
                <p>
                  <strong>E-mail: </strong> {user.email}
                </p>
              </div>
              <TrashIcon
                src={TrashIcons}
                alt="ícone de lixo"
                onClick={() => deleteUsers(user.id)}
              />
            </CardUsers>
          ))}
        </ContainerUsers>

        <Button type="button" onClick={() => navigateHome("/", { replace: true })}>
          Voltar
        </Button>
      </UsersContainer>

      <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
    </Background>
  );
};

export default ListUsers;
