class DatabaseError extends Error {
    constructor(
        public message: any,
        public error?: Error
    ) {
        super(message)
    }
}

export default DatabaseError;