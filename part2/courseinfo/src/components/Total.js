const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <div>
            <p style={{fontWeight: 'bold'}}>total of {total} exercises</p>
        </div>
    )
}

export default Total