
export default (actionName: string) => {
    return process.env.VUE_APP_BASE_URL + process.env.VUE_APP_SERVICE + actionName;
};
