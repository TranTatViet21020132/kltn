class WorkerService {
  public worker;
  constructor() {
    try {
      this.worker = new SharedWorker("/ppf/worker.js");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  startWorker() {
    if (this.worker) {
      this.worker.port.start();
    }
  }

  postMessage(message: unknown) {
    if (this.worker) {
      this.worker.port.postMessage(message);
    }
  }

  onMessage(callBack: (e: MessageEvent) => void) {
    if (this.worker) {
      this.worker.port.onmessage = (e: MessageEvent) => {
        callBack(e);
      };
    }
  }
}

const workerService = new WorkerService();

export default workerService;
