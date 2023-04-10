import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutMe } from "./style";

const About = () => {
  return (
    <>
      <AboutMe id="about-me">
        <Container>
          <Text
            as="h2"
            type="heading4"
            color="grey4"
            style={{ marginBottom: "20px" }}
          >
            About me
          </Text>
          <Text as="p" type="body1" color="grey2">
					Desenvolvedor de sites Front-End com conhecimento em diversas linguagens; o objetivo é deixar a marca do site para o cliente de forma positiva: seja com um design mais ousado, ideias complexas ou outras necessidades. Retenho experiência diretamente no mundo da programação além da educação: monitorei novos desenvolvedores e ajudei-os na caminhada para um código limpo, acessível, retratação de erros e outros.
          </Text>
        </Container>
      </AboutMe>
    </>
  );
};

export default About;