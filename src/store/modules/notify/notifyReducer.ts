/* eslint-disable @typescript-eslint/no-explicit-any */
import {CLOSE_NOTIFY, ERROR_NOTIFY, INFO_NOTIFY, SUCCESS_NOTIFY, WARNING_NOTIFY} from './notifyTypes';

const initialState = {
    notifyMessage: '',
    openNotify: false,
    colorType: 'success'
};

const notifyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case OPEN_NOTIFY:
        //     return {
        //         ...state,
        //         openNotify: true
        //     }
        case CLOSE_NOTIFY:
            return {
                ...state,
                openNotify: false
            };
        case SUCCESS_NOTIFY:
            return {
                ...state,
                openNotify: true,
                colorType: 'success',
                notifyMessage: action.message
            };
        case ERROR_NOTIFY:
            return {
                ...state,
                openNotify: true,
                colorType: 'error',
                notifyMessage: action.message
            };
        case WARNING_NOTIFY:
            return {
                ...state,
                openNotify: true,
                colorType: 'warning',

                notifyMessage: action.message
            };
        case INFO_NOTIFY:
            return {
                ...state,
                openNotify: true,
                colorType: 'info',

                notifyMessage: action.message
            };
        default:
            return state;
    }
};

export default notifyReducer;