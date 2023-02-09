/* eslint-disable @typescript-eslint/no-explicit-any */
import {CLOSE_NOTIFY, ERROR_NOTIFY, INFO_NOTIFY, SUCCESS_NOTIFY, WARNING_NOTIFY} from './notifyTypes';

export const successNotify = (message: string) => async (dispatch: any) => dispatch({type: SUCCESS_NOTIFY, message});

export const errorNotify = (message: string) => async (dispatch: any) => dispatch({type: ERROR_NOTIFY, message});

export const warningNotify = (message: string) => async (dispatch: any) => dispatch({type: WARNING_NOTIFY, message});

export const infoNotify = (message: string) => async (dispatch: any) => dispatch({type: INFO_NOTIFY, message});

export const closeNotify = () => async (dispatch: any) => dispatch({type: CLOSE_NOTIFY});