import AboutProject from "../components/AboutProject";
import "../sass/layout/literatvs.sass";
import Button from "../components/Button";
import preview from "../img/amigosecretodascore.png"

const AmigoSecretoDasCores = () => {
  return (
    <div className="literatvs">
      <AboutProject
        ProjectName={"Amigo Secreto das Cores"}
        Status={"Work in Progress · Front-end"}
        Overview={
            "Aplicação web para organizar sorteios de amigo secreto com foco em experiência visual e organização dos participantes."
        }
        MainPoints={"Principais pontos: Desenvolvimento em React + Vite; Estrutura de rotas e páginas principais; Layout responsivo; Design system próprio"}
        Techs={"Tecnologias: React · JavaScript · HTML · CSS / Tailwind"}
      />
        <img src={preview} alt=""/>
      
      <div className="buttons">
        <Button
          text={"Github"}
          link="https://github.com/moniqueruggeri/AmigoSecretoDasCores"
          external
        />
        <Button
          text={"Demo"}
          link="https://amigo-secreto-das-cores.vercel.app/"
          external
        />
        <Button
          text={"Figma"}
          link="https://www.figma.com/design/2RU82LfdF0aQw3q3SnIW15/Amigo-secreto-das-cores?node-id=0-1&t=8q7cS06dgciqg2PO-1"
          external
        />
      </div>
    </div>
  );
};

export default AmigoSecretoDasCores;
