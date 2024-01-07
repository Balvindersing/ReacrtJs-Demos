export default function ButtonComponent(props) {
    console.log('button is added');
    return <button {...props}>{props.name}</button>
}