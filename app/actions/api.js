import 'whatwg-fetch';

const access_token = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';

export function getOpertunities(dispatchMethod) {
  return dispatch =>
    fetch(
      `http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=${access_token}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => dispatch(dispatchMethod(res)));
}

export function updateOpertunities(dispatchMethod, data,id) {
  return dispatch =>
    fetch(`http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/${id}`, {
      method: 'PATCH',
      body: data,
    })
      .then(res => res.json())
      .then(res => dispatch(dispatchMethod(res)));
}
export function getBackground(dispatchMethod) {
  return dispatch =>
    fetch(`http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/backgrounds?access_token=${access_token}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => dispatch(dispatchMethod(res)));
}
export function getData(dispatchMethod,id) {
  return dispatch =>
    fetch(`http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/${id}?access_token=${access_token}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => dispatch(dispatchMethod(res)));
}