export default function Form ({theme}) {
    return(
        <Panel title='Welcome' theme={theme}>
            <Button theme={theme}>Sign Up</Button>
            <Button theme={theme}>Login</Button>
        </Panel>
    );
}