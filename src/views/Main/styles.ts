import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    padding-top: 40px;
`

export const NotesArea = styled.View`
    flex: 1;
    align-items: center;
`


export const TopGradientOverlay = styled(LinearGradient)`
    width: 100%;
    height: 160px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
`

export const BottomGradientOverlay = styled(LinearGradient)`
    width: 100%;
    height: 160px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
`

export const FooterContainer = styled.View``

export const Footer = styled.SafeAreaView``