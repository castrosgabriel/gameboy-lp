import styled from "styled-components"

type ButtonProps = {
    children: React.ReactNode
}

const MainButton = (props: ButtonProps) => {

    const ButtonStyled = styled.button`
    display: inline-flex;
    padding: 20px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: var(--nintendo-red);
    color: #fff;
    height: 56px;
    transition: all 0.2s ease;
    width: max-content;

    &:hover{
        padding: 16px 32px;
    }
    
    &:active {
        height: 48px;
        background: #AF0F1C;
        margin-top: 8px;
        padding: 16px 32px;
    }
    `

    const ButtonBase = styled.div`
    height: 56px;
    background: #AF0F1C;
    border-radius: 32px;
    transition: all 0.2s ease;
    margin: 32px;

    &:hover {
        padding: 0px 4px;
        height: 72px;
        margin: 24px 28px;
    }

    &:active {
        height: 56px;
        background: #8F1B24;
        margin: 40px 28px 24px 28px;
    }
`

    return (
        <ButtonBase>
            <ButtonStyled>
                <p><b>{props.children}</b></p>
            </ButtonStyled>
        </ButtonBase>
    )
}

export default MainButton