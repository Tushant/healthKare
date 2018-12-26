export default (list = [], id) => (list || []).find(item => item._id === id) || {};
