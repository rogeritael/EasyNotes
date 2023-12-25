import { CreateButton } from "../../components/CreateButton";
import { Text } from "../../components/Text";
import { MainContainer } from "./styles";

export function Main(){
    return (
        <MainContainer>
            <Text color="#fff" size={24} weight="300">
                <Text size={24} color="#fff" weight="600">Easy</Text>Notes
            </Text>
            <CreateButton />
        </MainContainer>
    )
}