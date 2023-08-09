const Notification = ({ message, className }) => {
  const error = {
    width: 'fit-content',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '5px 10px',
    color: 'red',
    backgroundColor: 'lightgoldenrodyellow',
    fontSize: '20px'
  }

  const msg = {
    width: 'fit-content',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '5px 10px',
    color: 'green',
    backgroundColor: 'lightgoldenrodyellow',
    fontSize: '20px'
  }

  const style = className === 'message' ? msg : error
  
  if (message === null) {
    return null
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification