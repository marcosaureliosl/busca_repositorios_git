
import errorImage from "../assets/imagem-de-erro-github.jpg";
import classes from "./Error.module.css";

const Erro = () => {
  return (
    <div className={classes.errorContainer}>
      <img src={errorImage} alt="Erro" className={classes.errorImage} />
      <p className={classes.errorMessage}>
        Nenhum usuário encontrado. Verifique o nome do usuário e tente novamente.
      </p>
    </div>
  );
}

export default Erro;
