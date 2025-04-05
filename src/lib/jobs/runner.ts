type JobFunction = () => Promise<void>

interface Job {
  name: string
  fn: JobFunction
  schedule: string // cron expression
  lastRun?: Date
  nextRun?: Date
}

class JobRunner {
  private static instance: JobRunner
  private jobs: Map<string, Job> = new Map()
  private running = false

  private constructor() {}

  static getInstance(): JobRunner {
    if (!JobRunner.instance) {
      JobRunner.instance = new JobRunner()
    }
    return JobRunner.instance
  }

  registerJob(name: string, fn: JobFunction, schedule: string) {
    this.jobs.set(name, { name, fn, schedule })
  }

  async start() {
    if (this.running) return
    this.running = true

    // TODO: Implement proper job scheduling with cron
    console.log('Job runner started')
  }

  async stop() {
    this.running = false
    // TODO: Implement proper cleanup
    console.log('Job runner stopped')
  }

  async runJob(name: string) {
    const job = this.jobs.get(name)
    if (!job) throw new Error(`Job ${name} not found`)

    try {
      await job.fn()
      job.lastRun = new Date()
      // TODO: Calculate next run based on cron expression
    } catch (error) {
      console.error(`Error running job ${name}:`, error)
      throw error
    }
  }

  getJobStatus(name: string) {
    const job = this.jobs.get(name)
    if (!job) throw new Error(`Job ${name} not found`)

    return {
      name: job.name,
      schedule: job.schedule,
      lastRun: job.lastRun,
      nextRun: job.nextRun
    }
  }
}

export const jobRunner = JobRunner.getInstance() 