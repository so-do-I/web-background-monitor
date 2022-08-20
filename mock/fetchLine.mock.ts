// @ts-ignore
import { Request, Response } from 'express';
import mockjs from 'mockjs';
import dayjs from 'dayjs';
// import _ from '@umijs/utils/compiled/lodash';

mockjs.Random.extend({
  event: function () {
    const event = ['interface', 'frontend', 'user', 'page', 'web']
    return this.pick(event)
  },
  units: function () {
    const units = ['times', 'ms', 's']
    return this.pick(units)
  }
})

// function genMockObject(data: string, num: number, query: any) {
//   const object: { [key in string]: any } = {};
//   const key = `${data}|${num}`
//   object[key] = query;
//   return object;
// };

const genDataWithLength = (interval: number = 7): string[] => {
  const today = dayjs();
  const dateArray = []
  for (let i = interval; i > 0; i--) {
    // console.log('days', today.subtract(i, 'day').format('YYYY-MM-DD'))
    dateArray.push(today.subtract(i, 'day').format('YYYY-MM-DD'))
  }
  // console.log('dateArray', dateArray)
  return dateArray;
}

const genFloatWithLimit = (limit: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Array.from({ length: limit }, v => mockjs.mock('@float(0, 500, 2, 2)'))
}

const mockRes = (event: string, interval: number) => {
  const realEvent = '' ? undefined : event;
  if (event) {
    return mockjs.mock({
      code: 0,
      msg: 'success',
      date: genDataWithLength(interval),
      'data|15-20': [{
        'type': function () {
          return realEvent
        },
        'data': function () {
          return mockjs.mock({
            "event_name": /event_\d{5}/,
            "event_descirption": mockjs.Random.title(1),
            "units": mockjs.Random.units(),
            'data': genFloatWithLimit(interval)
          })
        }
      }]
    })
  } else {
    return mockjs.mock({
      code: 0,
      msg: 'success',
      date: genDataWithLength(interval),
      'data|60-80': [{
        'type': function () {
          return mockjs.Random.event()
        },
        'data': function () {
          return mockjs.mock({
            "event_name": /event_\d{5}/,
            "event_descirption": mockjs.Random.title(1),
            "units": mockjs.Random.units(),
            'data': genFloatWithLimit(interval)
          })
        }
      }]
    })
  }

}

export default {
  'GET /api/charts/line': (req: Request, res: Response) => {
    // console.log('req', req);
    const { type, time_interval = '7' } = req.query;
    console.log(type, time_interval)
    const time = parseInt(time_interval as string);
    res.status(200).send(mockRes(type as string, time));
  },
};
