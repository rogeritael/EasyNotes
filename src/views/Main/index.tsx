import { CreateButton } from "../../components/CreateButton";
import { Text } from "../../components/Text";
import { Container, NotesArea, Footer, FooterContainer } from "./styles";
import { notes } from "../../mocks/notes";
import { NoteCard } from "../../components/NoteCard";
import { FlatList } from "react-native";

export function Main(){
    return (
        <Container>
            <Text size={24} weight="300">
                <Text size={24} weight="600">Easy</Text>Notes
            </Text>

            <NotesArea style={{ justifyContent: `${notes.length < 1 ? 'center': 'flex-start'}` }}>
                { notes.length === 0 && (<Text color="#ffffff20" weight="300">Nenhuma nota adicionada</Text>)}
                <FlatList
                    data={notes}
                    style={{ marginTop: 32}}
                    contentContainerStyle={{ gap: 14 }}
                    renderItem={({ item: note }) => (
                        <NoteCard
                            key={note.title}
                            title={note.title}
                            content={note.content}
                            categories={note.categories}
                            created_at={note.created_at}
                            time_limit={note.time_limit}
                        />
                    )}
                />
            </NotesArea>

            <FooterContainer>
                <Footer>
                    <CreateButton />
                </Footer>
            </FooterContainer>
        </Container>
    )
}