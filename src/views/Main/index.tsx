import { CreateButton } from "../../components/CreateButton";
import { Text } from "../../components/Text";
import { Container, NotesArea, Footer, FooterContainer } from "./styles";
import { notes } from "../../mocks/notes";

export function Main(){
    return (
        <Container>
            <Text size={24} weight="300">
                <Text size={24} weight="600">Easy</Text>Notes
            </Text>

            <NotesArea style={{ justifyContent: `${notes.length < 1 ? 'center': 'flex-start'}` }}>
                { notes.length === 0 && (<Text color="#ffffff20" weight="300">Nenhuma nota adicionada</Text>)}
                <Text color="#ffffff20" weight="300">Teste</Text>
            </NotesArea>

            <FooterContainer>
                <Footer>
                    <CreateButton />
                </Footer>
            </FooterContainer>
        </Container>
    )
}