class Task {
    name;
    createDate;
    endDate;
    priority;
    constructor(name, endDate, priority) {
        this.name = name;
        this.createDate = Date.now();
        this.endDate = endDate;
        this.priority = priority;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getCreateDate() {
        return this.createDate;
    }

    setCreateDate(createDate) {
        this.createDate = createDate;
    }

    getEndDate() {
        return this.endDate;
    }

    setEndDate(endDate) {
        this.endDate = endDate;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}