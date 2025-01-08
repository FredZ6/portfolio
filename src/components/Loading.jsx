const Loading = () => {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default Loading 