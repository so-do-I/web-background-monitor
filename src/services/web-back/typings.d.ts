declare namespace API {
  type errorDetails = {
    /** 错误类型：TypeError .. 等等 */
    error_type?: string;
    /** 错误信息 */
    error_msg?: string;
    /** 错误发生的时间 */
    time?: string;
    /** 错误可能的原因 */
    error_reason?: string;
    /** 错误发生的路径 */
    error_bundle?: string;
    user_id?: string;
    device_id?: string;
    os_type?: string;
    os_version?: string;
    user_ip?: string;
  };

  type errorResponse = {
    code?: number;
    msg?: string;
    data?: errorDetails[];
  };

  type fetchErrorDetailsParams = {
    /** 接口异常 | 前端异常 */
    event_name?: string;
    /** 异常发生的时间区间 */
    time_interval?: number;
  };

  type fetchLineParams = {
    /** 监控数据类型，如用户行为数据等，不传默认全查 */
    type?: string;
    /** 时间区间，单位日 */
    time_interval: number;
    /** 监控事件名称 */
    event_name?: string;
  };

  type lineDetails = {
    event_name?: string;
    data?: number[];
    units?: string;
    event_descirption?: string;
  };

  type lineResponse = {
    code: number;
    msg: string;
    data?: { type: string; data: lineDetails }[];
    date?: string[];
  };

  type paramsError = {
    code?: number;
    msg?: string;
    type?: string;
  };

  type userInfo = {
    user_id?: string;
    device_id?: string;
    os_type?: string;
    os_version?: string;
    user_ip?: string;
  };
}
