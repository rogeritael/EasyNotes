import { CreateButton } from "../../components/CreateButton";
import { Text } from "../../components/Text";
import { Container, NotesArea, Footer, FooterContainer } from "./styles";

export function Main(){
    return (
        <Container>
            <Text size={24} weight="300">
                <Text size={24} weight="600">Easy</Text>Notes
            </Text>

            <NotesArea>
                <Text>
                    Minhas notas
                </Text>
            </NotesArea>

            <FooterContainer>
                <Footer>
                    <CreateButton />
                </Footer>
            </FooterContainer>
        </Container>
    )
}