import Joi from 'joi';
import { findAllDepartmentNames } from './utils';

const RegistrationValidation = (body) => {

    const schema = Joi.object({
        name: Joi.string().required('Corporate name required'),
        domain: Joi.string().required('Domain required'),
        address: Joi.string().required("Address required"),
        city: Joi.string().required("City required"),
        country: Joi.string().required("Country required"),
        corporateHead: Joi.string().required("Corporate head required"),
        legacyId: Joi.string().required(),
    }).unknown(true);

    return schema.validate(body);
};

const BranchBodyValidation = (body) => {
    const schema = Joi.object({
        name: Joi.string().required('Corporate name required'),
        country: Joi.string().required('Domain required'),
        address: Joi.string().required("Address required"),
        city: Joi.string().required("City required"),
        country: Joi.string().required("Country required"),
        branchHead: Joi.string().required("Corporate head required"),
        qrCode: Joi.string().required(),
    }).unknown(true);

    return schema.validate(body);
};

const DepapartmentRegistration = (data) => {
    const schema = Joi.object({
        name: Joi.string().required('Department name required'),
        branchName: Joi.string().required('Branch required'),
        departmentHead: Joi.string().required("Department head required"),
    }).unknown(true);

    return schema.validate(data);
};

const UpdateDepartmentValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required('Department name required'),
        branchName: Joi.string().required('Branch required'),
        departmentHead: Joi.string().required("Department head required"),
    }).unknown(true);

    return schema.validate(data);
};

const departments = findAllDepartmentNames();

const EmployeeBasicDetailsValidation = (body) => {

    const schema = Joi.object({
        firstName: Joi.string().required('First name required'),
        middleName: Joi.string(),
        lastName: Joi.string().required('Last name required'),
        workEmail: Joi.string().required('Work email required'),
        role: Joi.string().required("Role required"),
        gender: Joi.string().validate(["male", "female", "other"]),
        department: Joi.string().validate(departments, "No such department").required("Department required"),
        passport: Joi.string(),
        firstDayOfWork: Joi.date("Enter valid date").required("First day of work required"),
        compenstationType: Joi.string().validate(["hourly", "monthly"]).required("Compensation type require"),
        salary: Joi.number(),
        paymentPeriod: Joi.string().validate(["weekly", "monthly"]).required("Payment period required")

    }).unknown(true);

    return schema.validate(body);
};

const LoginValidation = () => {
    const schema = Joi.object({
        email: Joi.string().required('Department name required'),
        password: Joi.string().required('Branch required'),
        role: Joi.string().validate(["hr", "employee", "admin"]),
    }).unknown(true);

    return schema.validate(data);
};

export { RegistrationValidation, BranchBodyValidation, DepapartmentRegistration, UpdateDepartmentValidation, EmployeeBasicDetailsValidation, LoginValidation }