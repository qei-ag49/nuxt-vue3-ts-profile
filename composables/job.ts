export const setJob = (job: any) => {
  return (newJob: {}) => (job.value = newJob)
}

export const useJob = () => {
  const job = useState("job", () => ({}))

  return {
    job: readonly(job),
    setJob: setJob(job)
  }
}
