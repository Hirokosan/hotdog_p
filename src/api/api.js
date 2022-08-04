// import mockjs, { Mock } from "mockjs";
import mockjs from "mockjs";

mockjs.mock('/api/api', 'get', {
    status: true,
    data: [
        { context: 1, position: { longitude: 116.399, latitude: 39.909, }, },
        { context: 2, position: { longitude: 116.396, latitude: 39.9084, }, },
        { context: 3, position: { longitude: 116.397, latitude: 39.911, }, },
    ]
})