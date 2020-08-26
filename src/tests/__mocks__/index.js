export const helper = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};