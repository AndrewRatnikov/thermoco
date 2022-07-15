const DeleteSensor = ({ handler }: { handler: () => void }) => {
    return (
        <button onClick={handler}>Delete</button>
    )
}

export default DeleteSensor