import axios from 'axios';

export const FETCH_SUGAR_CHART = "fetch_sugar_chart";

export function fetchSugarChart() {
    let request = axios.post('api/chart/sugar');

    return {
        type: FETCH_SUGAR_CHART,
        payload: request
    }
}