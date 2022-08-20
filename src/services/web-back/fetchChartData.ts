// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 传入异常类型、日期(可选)，返回详细信息 GET /api/charts/error-details */
export async function fetchErrorDetails(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.fetchErrorDetailsParams,
  options?: { [key: string]: any },
) {
  return request<API.errorResponse>('/api/charts/error-details', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 传入监控数据类型，返回类型下 要求时间段内 所有事件数据 GET /api/charts/line */
export async function fetchLine(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.fetchLineParams,
  options?: { [key: string]: any },
) {
  return request<API.lineResponse>('/api/charts/line', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** fetchWebPV GET /api/charts/pv */
export async function getPv(options?: { [key: string]: any }) {
  return request<{ code: number; msg: string; data: API.totalPV }>('/api/charts/pv', {
    method: 'GET',
    ...(options || {}),
  });
}

/** fetchStatisticalData GET /api/charts/statistical */
export async function getStatistical(options?: { [key: string]: any }) {
  return request<{ code: number; msg: string; data: API.statisticalData }>(
    '/api/charts/statistical',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
