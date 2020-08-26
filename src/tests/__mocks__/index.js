const helper = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

export default helper;
