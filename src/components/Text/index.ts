import styled from "styled-components/native";

interface TextProps {
    weight?: string;
    color?: string;
    size?: number;
    opacity?: number;
}

export const Text = styled.Text<TextProps>`
    /* font-family: ${({ weight }: { weight?: string }) => weight ? `GeneralSans${weight}`: 'GeneralSans400'}; */
    color: ${({ color }: { color?: string }) => color || '#fff'};
    font-size: ${({ size }: { size?: number }) => size ? `${size}px`: '16px'};
    opacity: ${({ opacity }: { opacity?: number }) => opacity || 1};
    font-weight: ${({ weight }: { weight?: string }) => weight || '400'};
`;