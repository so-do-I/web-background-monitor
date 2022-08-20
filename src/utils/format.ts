// import { fetchErrorDetails } from '@/services/fetchPrefData';
import routes from "../../config/routes";
// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function formatOriginLineDataToComponents(lineData: API.lineResponse, limit?: number) {
  const date = lineData?.date as string[];
  const classificationData: { [key: string]: any[] } = {};
  const staticData: { [key: string]: any[] } = {};
  const tempLineData = limit ? lineData.data!.slice(0, limit) : lineData.data 

  tempLineData!.forEach((element) => {
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

export function formatOriginErrorDetailToComponets(errorDetails: API.errorResponse) {
  const errorNum: { [key in string]: number } = {}
  const classifiedErrorDetail: { [key in string]: any } = {}

  errorDetails.data!.forEach(element => {
    if (errorNum[element.error_type]) {
      errorNum[element.error_type] = errorNum[element.error_type] + 1
    } else {
      errorNum[element.error_type] = 1
    }
    if (classifiedErrorDetail[element.error_type]) {
      classifiedErrorDetail[element.error_type].push(element)
    } else {
      classifiedErrorDetail[element.error_type] = [element]
    }
  })
  return { errorNum, classifiedErrorDetail }
}


export function formatRouteToKeyPath() {
  const keyPathDict: { [key: string]: { path: string, name: string } } = {};
  routes.forEach(e => {
    if (e.key) {
      keyPathDict[e.key] = {
        path: e.path,
        name: e.name
      }
    }
    if (e.routes) {
      e.routes.forEach(ec => {
        keyPathDict[ec.key] = {
          path: ec.path,
          name: ec.name
        }
      })
    }
  })
  return keyPathDict;
}

export function clacDiff(a: number[], abs = false) {
  const todayValue = a.at(-1) ?? 0;
  const yesterdayValue = a.at(-2) ?? 0;
  const diff = yesterdayValue === 0
    ? todayValue * 100
    : ((todayValue - yesterdayValue) / yesterdayValue) * 100;
  return abs ? Math.abs(diff) : diff
}