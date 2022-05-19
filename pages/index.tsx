import type { NextPage } from "next";
import { Button, Htag, Ptag, Tag } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag={"h1"}>Hello Next Htag1</Htag>
      <Htag tag={"h2"}>Hello Next Htag2</Htag>
      <Htag tag={"h3"}>Hello Next Htag3</Htag>
      <Button>Кнопка</Button>
      <Button appearance={"ghost"} arrow={"right"}>
        Кнопка
      </Button>
      <Button appearance={"ghost"} arrow={"down"}>
        Кнопка
      </Button>
      <Ptag size={"s"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quidem.
      </Ptag>
      <Ptag>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quidem.</Ptag>
      <Ptag size={"l"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quidem.
      </Ptag>
      <Tag size="m" color="gray">
        Tag gray
      </Tag>
      <Tag size="s" color="green">
        Tag green
      </Tag>
      <Tag size="s" color="ghost">
        Tag ghost
      </Tag>
      <Tag size="m" color="red">
        Tag red
      </Tag>
      <Tag href="www.vk.com" size="s" color="primary">
        Tag primary
      </Tag>
    </div>
  );
};

export default Home;
