export const AlertMessage = ({ message, type }) => {
  if (!message) return null

  const styles = {
    success: { color: '#21ce99' },
    error: { color: '#de4330' },
  }

  return (
    <div
      style={{
        border: `1px solid ${styles[type].color}`,
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 0',
        color: ` ${styles[type].color}`,
      }}
      role="alert"
    >
      <span>{message}</span>
    </div>
  )
}
