// import { fetchErrorDetails } from '@/services/fetchPrefData';
// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function formatOriginLineDataToComponents(lineData: API.lineResponse) {
  // const lineData = []
  // const descriptionData = []
  // const staicData = []
  console.log('lineData', lineData);
  const date = lineData?.date as string[];
  const classificationData: { [key: string]: any[] } = {};
  const staticData: { [key: string]: any[] } = {};

  lineData.data!.forEach((element) => {
    if (classificationData[element.type]) {
      classificationData[element.type].push(element.data);
    } else {
      classificationData[element.type] = [element.data];
    }
    if (staticData[element.type]) {
      staticData[element.type].push({
        title: element.data.event_descirption!,
        data: element.data.data!,
        subTitle: element.data.event_name!,
        units: element.data.units!,
      });
    } else {
      staticData[element.type] = [
        {
          title: element.data.event_descirption!,
          data: element.data.data!,
          subTitle: element.data.event_name!,
          units: element.data.units!,
        },
      ];
    }
  });
  console.log(classificationData);
  return { date, classificationData, staticData };
}
