import AboutProject from "../components/AboutProject";
import "../sass/layout/literatvs.sass";
import Button from "../components/Button";
import MFSPrev from "../img/Myfriendissingle-preview.png"

const MyFriendIsSingle = () => {
  return (
    <div className="literatvs">
      <AboutProject
        ProjectName={"My Friend Is Single"}
        Status={"Projeto Finalizado · Front-end"}
        Overview={
          "Uma página web divertida desenvolvida com foco em experiência visual e interação através de um QR Code físico, idealizada como um cartão criativo para mostrar habilidades técnicas e senso de design"
        }
        MainPoints={
          "O que foi feito: Layout responsivo usando HTML, CSS e JavaScript; Design inspirado em estética de apps de relacionamento; Integração com QR Code para experiência real via cartão; Estrutura de código limpa e minimalista pensada pra leitura rápida no portfolio"
        }
        Techs={"HTML5 · CSS3 · JavaScript · QR Code Generator · design no Figma"}
      />
      <img src={MFSPrev} alt="" />

      <div className="buttons">
        <Button
          text={"Github"}
          link="https://github.com/moniqueruggeri/MyFriendIsSingle"
          external
        />
        <Button
          text={"Demo"}
          link="https://my-friend-is-single.vercel.app/"
          external
        />
        <Button
          text={"Figma"}
          link="https://www.figma.com/design/6YgxOFZJlndWKtYdTqEjeS/My-Friend-is-Single-?node-id=0-1&t=8q7cS06dgciqg2PO-1"
          external
        />
      </div>
    </div>
  );
};

export default MyFriendIsSingle;
