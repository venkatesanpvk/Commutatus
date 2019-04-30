import { findIndex, filter, map, isEmpty } from 'lodash';

const monthMax = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const monthMin = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthMinNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export function convertFullMonth(str) {
  const getIndex = findIndex(monthMinNumber, el => el.toUpperCase() === str.toUpperCase());
  return monthMax[getIndex];
}
// Password pattern
export function passwordPattern(password) {
  const capitalRegx = /^.*[A-Z]+.*$/;
  const numberRegx = /^.*[0-9]+.*$/;
  const specailCharRegx = /^.*[//.!#$%&'"()*+,-.\\:;<=>?@^_`{|}~]+.*$/;
  return numberRegx.test(password) && capitalRegx.test(password) && specailCharRegx.test(password);
}

export function getCurriculamShortName(data, contentTag) {
  let shortName = '';
  if (!isEmpty(data)) {
    map(data, elem => {
      if (!isEmpty(elem.payLoad.regions)) {
        map(elem.payLoad.regions, regions => {
          if (!isEmpty(regions)) {
            map(regions, curriculums => {
              if (!isEmpty(curriculums.requirements)) {
                map(curriculums.requirements, requirements => {
                  if (!isEmpty(requirements.childTopics)) {
                    map(requirements.childTopics, topicOne => {
                      if (!isEmpty(topicOne.childTopics)) {
                        map(topicOne.childTopics, topicTwo => {
                          if (!isEmpty(topicTwo.childTopics)) {
                            map(topicTwo.childTopics, targets => {
                              if (!isEmpty(targets.childTargets)) {
                                map(targets.childTargets, el => {
                                  if (el.id === contentTag) {
                                    shortName = curriculums.shortname;
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  return shortName;
}
export function getCurriculumArray(data) {
  const newArray = [];
  map(data, el => {
    map(el.payLoad.regions, regions => {
      map(regions.curriculums, elem => {
        newArray.push({ id: elem.id, name: elem.name, shortName: elem.shortname });
      });
    });
  });
  return newArray;
}
export function getDifferentCurriculum(tags, curriculums) {
  const curriculumsArray = getCurriculumArray(curriculums);
  const activeCurriculumArray = [];
  map(curriculumsArray, el => {
    filter(tags.status, elem => {
      if (elem.curriculumId === el.id) {
        activeCurriculumArray.push(el);
      }
    });
  });
  return activeCurriculumArray;
}
