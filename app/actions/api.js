import 'whatwg-fetch';

const access_token='dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';

export function getIconList( dispatchMethod) {
  return dispatch =>
    fetch(`http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=${access_token}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => dispatch(dispatchMethod(res)));
}
