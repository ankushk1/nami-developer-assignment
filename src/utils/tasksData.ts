export interface ITask {
  id: number;
  taskStatus: string[];
  taskRepeat: boolean;
  taskType: string;
  taskId: string;
  btnText: string;
  pendingStatus: {
    pending: boolean;
    taskTime: number;
  };
  rating: {
    rated: boolean;
    star: number;
  };
  details?:boolean
}

export const tasksData: ITask[] = [
  {
    id: 1,
    taskStatus: ["Not Accepted"],
    taskRepeat: true,
    taskType: "Guest Task",
    taskId: "#68988",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 2,
    taskStatus: [],
    taskRepeat: true,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 3,
    taskStatus: ["Delayed", "Complaint"],
    taskRepeat: true,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: true,
      star: 1
    }
  },
  {
    id: 4,
    taskStatus: ["Not Accepted"],
    taskRepeat: true,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 1
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 5,
    taskStatus: [],
    taskRepeat: false,
    taskType: "Guest Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 6,
    taskStatus: ["On-Time", "Complaint"],
    taskRepeat: true,
    taskType: "Guest Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: true,
      star: 5
    }
  },
  {
    id: 7,
    taskStatus: ["Ongoing"],
    taskRepeat: false,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 8,
    taskStatus: [],
    taskRepeat: true,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 9,
    taskStatus: ["On-Time", "Complaint"],
    taskRepeat: true,
    taskType: "Guest Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: true,
      star: 5
    }
  },
  {
    id: 10,
    taskStatus: [],
    taskRepeat: false,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    },
    details: true
  },
  {
    id: 11,
    taskStatus: [],
    taskRepeat: true,
    taskType: "Internal Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 12,
    taskStatus: ["Delayed"],
    taskRepeat: true,
    taskType: "Guest Task",
    taskId: "#68988",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 20
    },
    rating: {
      rated: true,
      star: 5
    }
  }
];
