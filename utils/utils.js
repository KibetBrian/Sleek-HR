import Department from "../models/Department.js";

const isObjectEmpty = (object) => {
    return Object.keys(object).length === 0;
}

const COMPENSATION_TYPES = {
    HOURLY: 'hourly',
    MONTHLY: 'monthly',
}

const DB_ERROR_CODES = {
    UCV: '23505'
}

export { DB_ERROR_CODES, isObjectEmpty }