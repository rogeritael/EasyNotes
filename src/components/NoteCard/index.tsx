import { NoteProps } from "../../types/NoteProps";
import { Text } from "../Text";
import { CardContainer } from "./styles";

export function NoteCard({ title, content, categories, time_limit, created_at }: NoteProps){
    return(
        <CardContainer>
            <Text size={14} color="#ffffff20">{created_at}</Text>
            <Text size={20}>{title}</Text>
            <Text size={14} color="#ffffff40">{content}...</Text>
        </CardContainer>
    )
}