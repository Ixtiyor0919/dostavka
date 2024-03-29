import { PagesContainer, PageTitle } from "./Subtitle.component";

export const Subtitle = ({title, cartLength, pL, pR}) => {
    return(
        <PagesContainer style={{ paddingLeft: pL, paddingRight: pR }}>
            <PageTitle>{title}</PageTitle>
        </PagesContainer>
    )
}