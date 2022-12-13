import Department from "../models/Department";

const findAllDepartmentNames = async () => {
    let departmentNames = [];
    const departments = await Department.findAll();
    for (let i = 0; i < departments.length; i++) {
        departmentNames.push(departments[i].name);
    };

    return departmentNames;
};

const COMPENSATION_TYPES = {
    HOURLY: 'hourly',
    MONTHLY: 'monthly',
}

const DB_ERROR_CODES = {
    UCV: '23505'
}

export {findAllDepartmentNames, DB_ERROR_CODES }