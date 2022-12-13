import Joi from 'joi';

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
}

export { RegistrationValidation, BranchBodyValidation, DepapartmentRegistration, UpdateDepartmentValidation }