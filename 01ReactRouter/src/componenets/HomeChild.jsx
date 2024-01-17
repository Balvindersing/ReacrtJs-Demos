export const HomeChild = (prop) => {

    const buttonClick = () => {
        prop.onClickCustom('ChildData')
    }
    return <>
        ParentData:    {prop.data}
        <button onClick={buttonClick}>Click me</button>
    </>
}