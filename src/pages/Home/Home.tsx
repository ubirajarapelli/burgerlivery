import { Button, Layout, Submenu } from "../../components";

export default function Home() {
  const handleClick = () => {
    console.log("Clicou");
  };

  const handleOpen = () => {
    console.log("Clicou");
  };

  const handleClose = () => {
    console.log("Clicou");
  };

  const menuItems = [
    { id: 0, text: "menu 1", url: "/home" },
    { id: 1, text: "menu 2", url: "/contato" },
    { id: 2, text: "menu 3", url: "/contato" },
  ];

  return (
    <Layout>
      <Submenu menuItems={menuItems} />
      <h1>Home</h1>
      <button onClick={handleClick}>botao normal</button>
      <Button onClick={handleOpen}>Botão</Button>
      <Button onClick={handleClose} variant="info" size="large">
        Botão
      </Button>
      <Button onClick={() => {}} variant="danger">
        Botão
      </Button>
    </Layout>
  );
}
