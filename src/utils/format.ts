// import { fetchErrorDetails } from '@/services/fetchPrefData';
// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function formatOriginLineDataToComponents(lineData: API.lineResponse) {
  // const lineData = []
  // const descriptionData = []
  // const staicData = []
  const date = lineData?.date as string[];
  const classificationData: { [key: string]: any[] } = {};

  lineData.data!.forEach((element) => {
    if (classificationData[element.type]) {
      classificationData[element.type].push(element.data);
    } else {
      classificationData[element.type] = [element.data];
    }
  });
  return { date, classificationData };
}
